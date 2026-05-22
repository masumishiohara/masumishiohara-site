"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";

type WorkFormat = "portrait" | "landscape" | "square";

const works = [
  {
    id: "MS-CS",
    title: "Canvas Botanical Studies",
    image: "/series/canvas-sheet.jpg",
    format: "portrait" as WorkFormat,
    statement: "Canvas sheet studies of cultivated fruit and botanical form.",
  },
  {
    id: "MS-AT",
    title: "Antique Botanical Studies",
    image: "/series/antique-botanical.jpg",
    format: "portrait" as WorkFormat,
    statement: "Antique botanical studies with archival atmosphere.",
  },
  {
    id: "MS-VL",
    title: "Vellum Fruit Studies",
    image: "/series/parchment-vellum.jpg",
    format: "portrait" as WorkFormat,
    statement: "Fruit studies with vellum-like surface and memory.",
  },
  {
    id: "MS-BG",
    title: "Black Ground Botanical Works",
    image: "/series/black-ground-botanical.jpg",
    format: "portrait" as WorkFormat,
    statement: "Botanical works isolated against a dark ground.",
  },
  {
    id: "MS-GP",
    title: "Growth Process",
    image: "/series/growth-process.jpg",
    format: "landscape" as WorkFormat,
    statement: "Agricultural time, growth, observation, and harvest.",
  },
  {
    id: "MS-SS",
    title: "Selection Studies",
    image: "/series/selection-study.jpg",
    format: "landscape" as WorkFormat,
    statement: "Breeding, selection, removal, and the forms left behind.",
  },
  {
    id: "MS-CF",
    title: "Cultivated Fruit Compositions",
    image: "/series/cultivated-fruit-composition.jpg",
    format: "portrait" as WorkFormat,
    statement: "Fruit cultivated and composed as artistic material.",
  },
  {
    id: "MS-PO",
    title: "Portraits: Single Variety",
    image: "/series/portrait-single-variety.jpg",
    format: "portrait" as WorkFormat,
    statement: "Single-variety fruit portraits.",
  },
  {
    id: "MS-PC",
    title: "Portraits: Composite Forms",
    image: "/series/portrait-composition.jpg",
    format: "portrait" as WorkFormat,
    statement: "Composite fruit portraits and constructed presence.",
  },
  {
    id: "MS-CO",
    title: "Color Object Works",
    image: "/series/color-object.jpg",
    format: "square" as WorkFormat,
    statement: "Color object works between photography and sculpture.",
  },
  {
    id: "MS-MO",
    title: "Monochrome Object Works",
    image: "/series/monochrome-object.jpg",
    format: "square" as WorkFormat,
    statement: "Monochrome object works emphasizing form and shadow.",
  },
  {
    id: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    image: "/series/improvisation-object-series.jpg",
    format: "square" as WorkFormat,
    statement: "Improvised fruit forms shaped by breeding and selection.",
  },
];

const frameStyles = [
  {
    id: "modern",
    label: "Modern",
    description: "Quiet black museum frame.",
  },
  {
    id: "elegant",
    label: "Elegant",
    description: "Black and gold frame with refined depth.",
  },
  {
    id: "antique",
    label: "Antique",
    description: "Aged wood and botanical archive atmosphere.",
  },
  {
    id: "chic",
    label: "Chic",
    description: "Soft black frame for private salon presentation.",
  },
  {
    id: "urban",
    label: "Urban",
    description: "Minimal architectural frame for contemporary rooms.",
  },
  {
    id: "carved",
    label: "Wood Carved",
    description: "Carved wood frame with quiet ornamental presence.",
  },
];

const matStyles = [
  {
    id: "warm",
    label: "Warm Ivory",
  },
  {
    id: "stone",
    label: "Stone White",
  },
  {
    id: "charcoal",
    label: "Charcoal",
  },
];

const scalePresets = [
  {
    id: "study",
    label: "Study",
    description: "A4 / small private study scale.",
    width: "420px",
    frame: "24px",
    corner: "52px",
  },
  {
    id: "gallery",
    label: "Gallery",
    description: "Standard private gallery scale.",
    width: "600px",
    frame: "34px",
    corner: "70px",
  },
  {
    id: "large",
    label: "Large Wall",
    description: "Large collector-wall scale.",
    width: "760px",
    frame: "44px",
    corner: "86px",
  },
  {
    id: "monumental",
    label: "B0 × 2",
    description: "Monumental proposal scale.",
    width: "900px",
    frame: "52px",
    corner: "96px",
  },
];

const rooms = [
  {
    id: "salon",
    label: "Salon Noir",
    description: "Dark private viewing room with focused museum lighting.",
  },
  {
    id: "residence",
    label: "Collector Residence",
    description: "Residential installation study for collectors and salons.",
  },
  {
    id: "gallery",
    label: "White Gallery",
    description: "Neutral gallery room for scale and placement studies.",
  },
  {
    id: "hotel",
    label: "Luxury Hospitality",
    description: "Hotel, maison, or private lounge atmosphere.",
  },
  {
    id: "maison",
    label: "Maison Salon",
    description: "High-jewelry style private salon atmosphere.",
  },
  {
    id: "custom",
    label: "Private Room Study",
    description: "Upload a room image for private placement simulation.",
  },
];

function getPlateMetrics(title: string) {
  const length = title.length;

  if (length <= 16) {
    return {
      width: "220px",
      fontSize: "13px",
      letterSpacing: "0.09em",
    };
  }

  if (length <= 26) {
    return {
      width: "300px",
      fontSize: "12px",
      letterSpacing: "0.065em",
    };
  }

  if (length <= 38) {
    return {
      width: "390px",
      fontSize: "10.5px",
      letterSpacing: "0.045em",
    };
  }

  return {
    width: "500px",
    fontSize: "9.5px",
    letterSpacing: "0.025em",
  };
}

export default function PrivateGalleryPage() {
  const [workId, setWorkId] = useState("MS-BG");
  const [frameId, setFrameId] = useState("elegant");
  const [matId, setMatId] = useState("warm");
  const [scaleId, setScaleId] = useState("gallery");
  const [roomId, setRoomId] = useState("salon");
  const [uploadedRoom, setUploadedRoom] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selectedWork = useMemo(() => {
    return works.find((work) => work.id === workId) ?? works[0];
  }, [workId]);

  const selectedRoom = useMemo(() => {
    return rooms.find((room) => room.id === roomId) ?? rooms[0];
  }, [roomId]);

  const selectedScale = useMemo(() => {
    return scalePresets.find((scale) => scale.id === scaleId) ?? scalePresets[1];
  }, [scaleId]);

  const plateMetrics = useMemo(() => {
    return getPlateMetrics(selectedWork.title);
  }, [selectedWork.title]);

  const styleVars = {
    "--atelier-frame-width": selectedScale.width,
    "--atelier-frame-thickness": selectedScale.frame,
    "--atelier-corner-size": selectedScale.corner,
    "--atelier-plate-width": plateMetrics.width,
    "--atelier-plate-font-size": plateMetrics.fontSize,
    "--atelier-plate-letter-spacing": plateMetrics.letterSpacing,
  } as CSSProperties;

  useEffect(() => {
    const savedConfig = window.localStorage.getItem("masumi-private-gallery");

    if (!savedConfig) {
      return;
    }

    try {
      const parsed = JSON.parse(savedConfig);

      if (parsed.workId) setWorkId(parsed.workId);
      if (parsed.frameId) setFrameId(parsed.frameId);
      if (parsed.matId) setMatId(parsed.matId);
      if (parsed.scaleId) setScaleId(parsed.scaleId);
      if (parsed.roomId) setRoomId(parsed.roomId);
    } catch {
      window.localStorage.removeItem("masumi-private-gallery");
    }
  }, []);

  function saveViewingStudy() {
    window.localStorage.setItem(
      "masumi-private-gallery",
      JSON.stringify({
        workId,
        frameId,
        matId,
        scaleId,
        roomId,
      })
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  function handleRoomUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUploadedRoom(reader.result);
        setRoomId("custom");
      }
    };

    reader.readAsDataURL(file);
  }

  return (
    <main className="atelierPage" style={styleVars}>
      <section className="atelierViewport">
        <aside className="atelierRail">
          <p className="atelierLabel">WORK</p>

          <div className="atelierWorkList">
            {works.map((work) => (
              <button
                key={work.id}
                className={workId === work.id ? "active" : ""}
                onClick={() => setWorkId(work.id)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  onError={(event) => {
                    event.currentTarget.src = "/botanical.jpg";
                  }}
                />

                <span>{work.id}</span>
                <strong>{work.title}</strong>
              </button>
            ))}
          </div>
        </aside>

        <section className={`atelierStage atelierRoom-${roomId}`}>
          {roomId === "custom" && uploadedRoom ? (
            <img
              className="atelierCustomRoom"
              src={uploadedRoom}
              alt="Uploaded room"
            />
          ) : null}

          <div className="atelierSpotlight" />

          <div
            className={`atelierFramedObject frame-${frameId} mat-${matId}`}
          >
            <div className="atelierFrame">
              <div className="atelierCorner atelierCornerTL" />
              <div className="atelierCorner atelierCornerTR" />
              <div className="atelierCorner atelierCornerBL" />
              <div className="atelierCorner atelierCornerBR" />

              <div className="atelierEdge atelierEdgeTop" />
              <div className="atelierEdge atelierEdgeBottom" />
              <div className="atelierEdge atelierEdgeLeft" />
              <div className="atelierEdge atelierEdgeRight" />

              <div className="atelierMat">
                <div className={`atelierWindow format-${selectedWork.format}`}>
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    onError={(event) => {
                      event.currentTarget.src = "/botanical.jpg";
                    }}
                  />
                </div>

                <div className="atelierPlate">
                  <span>{selectedWork.title}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="atelierCaption">
            <p>{selectedWork.id}</p>
            <h1>{selectedWork.title}</h1>
            <span>{selectedWork.statement}</span>
            <small>{selectedRoom.description}</small>
          </div>
        </section>

        <aside className="atelierPanel">
          <p className="atelierLabel">VIEWING CONFIGURATION</p>

          <div className="atelierPanelGroup">
            <h2>Frame</h2>

            <div className="atelierOptionGrid">
              {frameStyles.map((frame) => (
                <button
                  key={frame.id}
                  className={frameId === frame.id ? "active" : ""}
                  onClick={() => setFrameId(frame.id)}
                >
                  <span>{frame.label}</span>
                  {frame.description}
                </button>
              ))}
            </div>
          </div>

          <div className="atelierPanelGroup">
            <h2>Mat</h2>

            <div className="atelierOptionGrid compact">
              {matStyles.map((mat) => (
                <button
                  key={mat.id}
                  className={matId === mat.id ? "active" : ""}
                  onClick={() => setMatId(mat.id)}
                >
                  {mat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="atelierPanelGroup">
            <h2>Scale</h2>

            <div className="atelierOptionGrid">
              {scalePresets.map((scale) => (
                <button
                  key={scale.id}
                  className={scaleId === scale.id ? "active" : ""}
                  onClick={() => setScaleId(scale.id)}
                >
                  <span>{scale.label}</span>
                  {scale.description}
                </button>
              ))}
            </div>
          </div>

          <div className="atelierPanelGroup">
            <h2>Room</h2>

            <div className="atelierOptionGrid">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  className={roomId === room.id ? "active" : ""}
                  onClick={() => setRoomId(room.id)}
                >
                  <span>{room.label}</span>
                  {room.description}
                </button>
              ))}
            </div>

            <label className="atelierUpload">
              Upload Room Image
              <input
                type="file"
                accept="image/*"
                onChange={handleRoomUpload}
              />
            </label>
          </div>

          <div className="atelierSave">
            <button onClick={saveViewingStudy}>
              {saved ? "Viewing Study Saved" : "Save Viewing Study"}
            </button>

            <p>
              Configuration is stored locally for private review.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
