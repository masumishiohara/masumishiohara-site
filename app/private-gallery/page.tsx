"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";

type WorkId =
  | "MS-CS"
  | "MS-AT"
  | "MS-VL"
  | "MS-BG"
  | "MS-GP"
  | "MS-SS"
  | "MS-CF"
  | "MS-PO"
  | "MS-PC"
  | "MS-CO"
  | "MS-MO"
  | "MS-IF";

type WorkFormat =
  | "portrait"
  | "landscape"
  | "square";

type FrameId =
  | "modern"
  | "elegant"
  | "antique"
  | "chic"
  | "urban"
  | "carved";

type MatId =
  | "warm"
  | "stone"
  | "dark";

type RoomId =
  | "salon"
  | "residence"
  | "gallery"
  | "hotel"
  | "maison"
  | "loft"
  | "custom";

type ScaleId =
  | "a4"
  | "gallery"
  | "large"
  | "b0x2";

const works = [
  {
    id: "MS-CS" as WorkId,
    title: "Canvas Botanical Studies",
    image: "/series/canvas-sheet.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Canvas sheet studies of cultivated fruit and botanical form.",
  },
  {
    id: "MS-AT" as WorkId,
    title: "Antique Botanical Studies",
    image: "/series/antique-botanical.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Antique botanical studies with archival atmosphere.",
  },
  {
    id: "MS-VL" as WorkId,
    title: "Vellum Fruit Studies",
    image: "/series/parchment-vellum.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Fruit studies with vellum-like surface and memory.",
  },
  {
    id: "MS-BG" as WorkId,
    title: "Black Ground Botanical Works",
    image: "/series/black-ground-botanical.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Botanical works isolated against a dark ground.",
  },
  {
    id: "MS-GP" as WorkId,
    title: "Growth Process",
    image: "/series/growth-process.jpg",
    format: "landscape" as WorkFormat,
    statement:
      "Agricultural time, growth, observation, and harvest.",
  },
  {
    id: "MS-SS" as WorkId,
    title: "Selection Studies",
    image: "/series/selection-study.jpg",
    format: "landscape" as WorkFormat,
    statement:
      "Breeding, selection, removal, and the forms left behind.",
  },
  {
    id: "MS-CF" as WorkId,
    title: "Cultivated Fruit Compositions",
    image: "/series/cultivated-fruit-composition.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Fruit cultivated and composed as artistic material.",
  },
  {
    id: "MS-PO" as WorkId,
    title: "Portraits: Single Variety",
    image: "/series/portrait-single-variety.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Single-variety fruit portraits.",
  },
  {
    id: "MS-PC" as WorkId,
    title: "Portraits: Composite Forms",
    image: "/series/portrait-composition.jpg",
    format: "portrait" as WorkFormat,
    statement:
      "Composite fruit portraits and constructed presence.",
  },
  {
    id: "MS-CO" as WorkId,
    title: "Color Object Works",
    image: "/series/color-object.jpg",
    format: "square" as WorkFormat,
    statement:
      "Color object works between photography and sculpture.",
  },
  {
    id: "MS-MO" as WorkId,
    title: "Monochrome Object Works",
    image: "/series/monochrome-object.jpg",
    format: "square" as WorkFormat,
    statement:
      "Monochrome object works emphasizing form and shadow.",
  },
  {
    id: "MS-IF" as WorkId,
    title: "Improvisations of a Fruit Breeder",
    image: "/series/improvisation-object-series.jpg",
    format: "square" as WorkFormat,
    statement:
      "Improvised fruit forms shaped by breeding and selection.",
  },
];

const frameStyles = [
  {
    id: "modern" as FrameId,
    label: "Modern",
    description: "Quiet black museum frame.",
  },
  {
    id: "elegant" as FrameId,
    label: "Elegant",
    description: "Black and gold frame with refined depth.",
  },
  {
    id: "antique" as FrameId,
    label: "Antique",
    description: "Aged wood and classical botanical atmosphere.",
  },
  {
    id: "chic" as FrameId,
    label: "Chic",
    description: "Soft black frame for private salon presentation.",
  },
  {
    id: "urban" as FrameId,
    label: "Urban",
    description: "Minimal architectural frame for contemporary rooms.",
  },
  {
    id: "carved" as FrameId,
    label: "Wood Carved",
    description: "Carved wood frame with quiet ornamental presence.",
  },
];

const matStyles = [
  {
    id: "warm" as MatId,
    label: "Warm Ivory",
  },
  {
    id: "stone" as MatId,
    label: "Stone White",
  },
  {
    id: "dark" as MatId,
    label: "Charcoal",
  },
];

const rooms = [
  {
    id: "salon" as RoomId,
    label: "Salon Noir",
    description: "Dark private viewing room with focused museum lighting.",
  },
  {
    id: "residence" as RoomId,
    label: "Collector Residence",
    description: "Residential installation study for collectors and salons.",
  },
  {
    id: "gallery" as RoomId,
    label: "White Gallery",
    description: "Neutral gallery room for scale and placement studies.",
  },
  {
    id: "hotel" as RoomId,
    label: "Luxury Hospitality",
    description: "Hotel, maison, or private lounge atmosphere.",
  },
  {
    id: "maison" as RoomId,
    label: "Maison Salon",
    description: "High-jewelry style private salon atmosphere.",
  },
  {
    id: "loft" as RoomId,
    label: "Contemporary Loft",
    description: "Architectural collector loft atmosphere.",
  },
  {
    id: "custom" as RoomId,
    label: "Uploaded Room",
    description: "Private room image uploaded for placement study.",
  },
];

const scalePresets = [
  {
    id: "a4" as ScaleId,
    label: "A4 Study",
    description: "Small-format intimate viewing.",
    width: "420px",
    thickness: "24px",
    corner: "48px",
    mat: "28px",
  },
  {
    id: "gallery" as ScaleId,
    label: "Gallery",
    description: "Balanced private gallery presentation.",
    width: "600px",
    thickness: "34px",
    corner: "64px",
    mat: "42px",
  },
  {
    id: "large" as ScaleId,
    label: "Large Wall",
    description: "Large collector-room presentation.",
    width: "720px",
    thickness: "42px",
    corner: "78px",
    mat: "52px",
  },
  {
    id: "b0x2" as ScaleId,
    label: "B0 × 2 Proposal",
    description: "Monumental proposal using modular frame logic.",
    width: "860px",
    thickness: "50px",
    corner: "92px",
    mat: "60px",
  },
];

function getPlateMetrics(title: string) {
  const length = title.length;

  if (length <= 16) {
    return {
      width: "230px",
      fontSize: "14px",
      letterSpacing: "0.1em",
      padding: "9px 18px",
    };
  }

  if (length <= 26) {
    return {
      width: "310px",
      fontSize: "12px",
      letterSpacing: "0.075em",
      padding: "9px 18px",
    };
  }

  if (length <= 38) {
    return {
      width: "410px",
      fontSize: "11px",
      letterSpacing: "0.055em",
      padding: "10px 20px",
    };
  }

  return {
    width: "500px",
    fontSize: "10px",
    letterSpacing: "0.035em",
    padding: "11px 22px",
  };
}

export default function PrivateGalleryPage() {
  const [workId, setWorkId] = useState<WorkId>("MS-BG");
  const [frameId, setFrameId] = useState<FrameId>("elegant");
  const [matId, setMatId] = useState<MatId>("warm");
  const [roomId, setRoomId] = useState<RoomId>("salon");
  const [scaleId, setScaleId] = useState<ScaleId>("gallery");
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

  const studioVars = {
    "--studio-frame-width": selectedScale.width,
    "--studio-frame-thickness": selectedScale.thickness,
    "--studio-corner-size": selectedScale.corner,
    "--studio-mat-padding": selectedScale.mat,
    "--studio-plate-width": plateMetrics.width,
    "--studio-plate-font-size": plateMetrics.fontSize,
    "--studio-plate-letter-spacing": plateMetrics.letterSpacing,
    "--studio-plate-padding": plateMetrics.padding,
  } as CSSProperties;

  useEffect(() => {
    const savedConfig = window.localStorage.getItem("masumi-private-gallery");

    if (!savedConfig) return;

    try {
      const parsed = JSON.parse(savedConfig);

      if (parsed.workId) setWorkId(parsed.workId);
      if (parsed.frameId) setFrameId(parsed.frameId);
      if (parsed.matId) setMatId(parsed.matId);
      if (parsed.roomId) setRoomId(parsed.roomId);
      if (parsed.scaleId) setScaleId(parsed.scaleId);
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
        roomId,
        scaleId,
      })
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  function handleRoomUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

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
    <main className="pgStudioPage">
      <section className="pgStudioShell">
        <section className="pgStudioPreview">
          <div className="pgStudioHeader">
            <p>PRIVATE VIEWING ROOM</p>
            <span>MASUMI SHIOHARA</span>
          </div>

          <div
            className={`pgStudioRoom pgStudioRoom-${roomId}`}
            style={studioVars}
          >
            {roomId === "custom" && uploadedRoom ? (
              <img
                className="pgStudioCustomRoom"
                src={uploadedRoom}
                alt="Uploaded room"
              />
            ) : null}

            <div className="pgStudioSpotlight" />

            <div className={`studioFramedWork studioFrame-${frameId} studioMat-${matId}`}>
              <div className="studioFrameShell">
                <div className="studioFramePart studioFrameCorner studioFrameCornerTL" />
                <div className="studioFramePart studioFrameCorner studioFrameCornerTR" />
                <div className="studioFramePart studioFrameCorner studioFrameCornerBL" />
                <div className="studioFramePart studioFrameCorner studioFrameCornerBR" />

                <div className="studioFramePart studioFrameEdge studioFrameEdgeTop" />
                <div className="studioFramePart studioFrameEdge studioFrameEdgeBottom" />
                <div className="studioFramePart studioFrameEdge studioFrameEdgeLeft" />
                <div className="studioFramePart studioFrameEdge studioFrameEdgeRight" />

                <div className="studioDoubleMat">
                  <div className="studioTopMat">
                    <div className={`studioVCutWindow studioWindow-${selectedWork.format}`}>
                      <img
                        src={selectedWork.image}
                        alt={selectedWork.title}
                        onError={(event) => {
                          event.currentTarget.src = "/botanical.jpg";
                        }}
                      />
                    </div>
                  </div>

                  <div className="studioBrassPlate">
                    <span>{selectedWork.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pgStudioCaption">
            <p>{selectedWork.id}</p>

            <h2>{selectedWork.title}</h2>

            <span>{selectedWork.statement}</span>

            <small>
              Full sheet visible / mat overlap limited to approximately 1mm.
            </small>
          </div>
        </section>

        <aside className="pgStudioControls">
          <div className="pgControlsHeader">
            <p>VIEWING CONFIGURATION</p>

            <h1>
              Framing
              <br />
              & Installation
            </h1>
          </div>

          <div className="pgControlGroup">
            <h2>Work</h2>

            <div className="pgWorkButtons">
              {works.map((work) => (
                <button
                  key={work.id}
                  className={workId === work.id ? "active" : ""}
                  onClick={() => setWorkId(work.id)}
                >
                  <span>{work.id}</span>
                  {work.title}
                </button>
              ))}
            </div>
          </div>

          <div className="pgControlGroup">
            <h2>Frame</h2>

            <div className="pgOptionGrid">
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

          <div className="pgControlGroup">
            <h2>Mat</h2>

            <div className="pgOptionGrid three">
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

          <div className="pgControlGroup">
            <h2>Scale</h2>

            <div className="pgOptionGrid">
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

          <div className="pgControlGroup">
            <h2>Room</h2>

            <div className="pgOptionGrid">
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

            <label className="pgUploadButton">
              Private Room Study
              <input
                type="file"
                accept="image/*"
                onChange={handleRoomUpload}
              />
            </label>
          </div>

          <div className="pgControlSave">
            <button onClick={saveViewingStudy}>
              {saved ? "Viewing Study Saved" : "Save Viewing Study"}
            </button>

            <p>
              Configuration is saved locally in this browser. Future version:
              AI-generated room rendering and real frame-part assets.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
