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
    statement:
      "Canvas sheet studies of cultivated fruit and botanical form.",
  },
  {
    id: "MS-AT" as WorkId,
    title: "Antique Botanical Studies",
    image: "/series/antique-botanical.jpg",
    statement:
      "Antique botanical studies with archival atmosphere.",
  },
  {
    id: "MS-VL" as WorkId,
    title: "Vellum Fruit Studies",
    image: "/series/parchment-vellum.jpg",
    statement:
      "Fruit studies with vellum-like surface and memory.",
  },
  {
    id: "MS-BG" as WorkId,
    title: "Black Ground Botanical Works",
    image: "/series/black-ground-botanical.jpg",
    statement:
      "Botanical works isolated against a dark ground.",
  },
  {
    id: "MS-GP" as WorkId,
    title: "Growth Process",
    image: "/series/growth-process.jpg",
    statement:
      "Agricultural time, growth, observation, and harvest.",
  },
  {
    id: "MS-SS" as WorkId,
    title: "Selection Studies",
    image: "/series/selection-study.jpg",
    statement:
      "Breeding, selection, removal, and the forms left behind.",
  },
  {
    id: "MS-CF" as WorkId,
    title: "Cultivated Fruit Compositions",
    image: "/series/cultivated-fruit-composition.jpg",
    statement:
      "Fruit cultivated and composed as artistic material.",
  },
  {
    id: "MS-PO" as WorkId,
    title: "Portraits: Single Variety",
    image: "/series/portrait-single-variety.jpg",
    statement:
      "Single-variety fruit portraits.",
  },
  {
    id: "MS-PC" as WorkId,
    title: "Portraits: Composite Forms",
    image: "/series/portrait-composition.jpg",
    statement:
      "Composite fruit portraits and constructed presence.",
  },
  {
    id: "MS-CO" as WorkId,
    title: "Color Object Works",
    image: "/series/color-object.jpg",
    statement:
      "Color object works between photography and sculpture.",
  },
  {
    id: "MS-MO" as WorkId,
    title: "Monochrome Object Works",
    image: "/series/monochrome-object.jpg",
    statement:
      "Monochrome object works emphasizing form and shadow.",
  },
  {
    id: "MS-IF" as WorkId,
    title: "Improvisations of a Fruit Breeder",
    image: "/series/improvisation-object-series.jpg",
    statement:
      "Improvised fruit forms shaped by breeding and selection.",
  },
];

const frameStyles = [
  {
    id: "modern" as FrameId,
    label: "Modern",
    description:
      "Quiet black museum frame.",
  },
  {
    id: "elegant" as FrameId,
    label: "Elegant",
    description:
      "Black and gold frame with refined depth.",
  },
  {
    id: "antique" as FrameId,
    label: "Antique",
    description:
      "Aged wood and classical botanical atmosphere.",
  },
  {
    id: "chic" as FrameId,
    label: "Chic",
    description:
      "Soft black frame for private salon presentation.",
  },
  {
    id: "urban" as FrameId,
    label: "Urban",
    description:
      "Minimal architectural frame for contemporary rooms.",
  },
  {
    id: "carved" as FrameId,
    label: "Wood Carved",
    description:
      "Carved wood frame with quiet ornamental presence.",
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
    label: "Charcoal Double Mat",
  },
];

const scalePresets = [
  {
    id: "a4" as ScaleId,
    label: "A4 Study",
    description: "Small-format intimate viewing.",
    width: "440px",
    thickness: "24px",
    corner: "46px",
  },
  {
    id: "gallery" as ScaleId,
    label: "Gallery",
    description: "Balanced private gallery presentation.",
    width: "620px",
    thickness: "34px",
    corner: "62px",
  },
  {
    id: "large" as ScaleId,
    label: "Large Wall",
    description: "Large collector-room presentation.",
    width: "760px",
    thickness: "42px",
    corner: "76px",
  },
  {
    id: "b0x2" as ScaleId,
    label: "B0 × 2 Proposal",
    description: "Large-scale proposal using modular frame logic.",
    width: "900px",
    thickness: "50px",
    corner: "88px",
  },
];

const rooms = [
  {
    id: "salon" as RoomId,
    label: "Salon Noir",
    description:
      "Dark private viewing room with focused museum lighting.",
  },
  {
    id: "residence" as RoomId,
    label: "Collector Residence",
    description:
      "Residential installation study for collectors and salons.",
  },
  {
    id: "gallery" as RoomId,
    label: "White Gallery",
    description:
      "Neutral gallery room for scale and placement studies.",
  },
  {
    id: "hotel" as RoomId,
    label: "Luxury Hospitality",
    description:
      "Hotel, maison, or private lounge atmosphere.",
  },
  {
    id: "custom" as RoomId,
    label: "Your Room",
    description:
      "Upload a room image for a future placement simulation.",
  },
];

const engineSpecs = [
  {
    title: "Frame Engine Specification",
    text:
      "The final engine treats frame, mat, plate, and room as one presentation system.",
  },
  {
    title: "Frame Part Naming",
    text:
      "corner-tl, corner-tr, corner-bl, corner-br, edge-top, edge-bottom, edge-left, edge-right.",
  },
  {
    title: "Six Frame Styles",
    text:
      "Modern, Elegant, Antique, Chic, Urban, and Wood Carved.",
  },
  {
    title: "Double Mat / V-cut",
    text:
      "The window is calculated so the work edge is not hidden by the mat.",
  },
  {
    title: "Brass Plate Layout",
    text:
      "Title length adjusts plate width, type size, spacing, and line wrapping.",
  },
  {
    title: "Room Template System",
    text:
      "Salon, residence, gallery, hospitality, and custom uploaded room studies.",
  },
  {
    title: "Uploaded Room Simulation",
    text:
      "A viewer may upload a room image and preview a framed work in that environment.",
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
      width: "300px",
      fontSize: "12px",
      letterSpacing: "0.075em",
      padding: "9px 18px",
    };
  }

  if (length <= 38) {
    return {
      width: "390px",
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

  const engineVars = {
    "--pg-frame-width": selectedScale.width,
    "--pg-frame-thickness": selectedScale.thickness,
    "--pg-corner-size": selectedScale.corner,
    "--pg-plate-width": plateMetrics.width,
    "--pg-plate-font-size": plateMetrics.fontSize,
    "--pg-plate-letter-spacing": plateMetrics.letterSpacing,
    "--pg-plate-padding": plateMetrics.padding,
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
    <main className="privateGalleryPage">
      <section className="privateGalleryHero">
        <p className="museumEyebrow">PRIVATE VIEWING ROOM</p>

        <h1>
          Framing
          <br />
          & Installation
        </h1>

        <p>
          A private viewing environment for Masumi Shiohara’s cultivated fruit
          works. Frame, mat, brass plate, room, and lighting are treated as part
          of the work’s presentation.
        </p>
      </section>

      <section
        className={`pgStage pgRoom-${roomId}`}
        style={engineVars}
      >
        {roomId === "custom" && uploadedRoom ? (
          <img
            className="pgCustomRoomImage"
            src={uploadedRoom}
            alt="Uploaded room"
          />
        ) : null}

        <div className="pgSpotlight" />

        <div className={`pgFramedWork pgFrame-${frameId} pgMat-${matId}`}>
          <div className="pgFrameShell">
            <div className="pgFramePart pgCorner pgCornerTL" />
            <div className="pgFramePart pgCorner pgCornerTR" />
            <div className="pgFramePart pgCorner pgCornerBL" />
            <div className="pgFramePart pgCorner pgCornerBR" />

            <div className="pgFramePart pgEdge pgEdgeTop" />
            <div className="pgFramePart pgEdge pgEdgeBottom" />
            <div className="pgFramePart pgEdge pgEdgeLeft" />
            <div className="pgFramePart pgEdge pgEdgeRight" />

            <div className="pgDoubleMat">
              <div className="pgTopMat">
                <div className="pgVCutWindow">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    onError={(event) => {
                      event.currentTarget.src = "/botanical.jpg";
                    }}
                  />
                </div>
              </div>

              <div className="pgBrassPlate">
                <span>{selectedWork.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pgWorkText">
          <p>{selectedWork.id}</p>
          <h2>{selectedWork.title}</h2>
          <span>{selectedWork.statement}</span>
          <small>{selectedRoom.description}</small>
        </div>
      </section>

      <section className="pgCustomizer">
        <div className="pgCustomizerHeader">
          <p className="museumEyebrow">VIEWING CONFIGURATION</p>

          <h2>
            Configure the framed work for a private gallery presentation.
          </h2>
        </div>

        <div className="pgCustomizerGrid">
          <div className="pgCustomizerColumn">
            <p className="pgCustomizerLabel">Work</p>

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

          <div className="pgCustomizerColumn">
            <p className="pgCustomizerLabel">Frame</p>

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

            <p className="pgCustomizerLabel pgSpaceLabel">Scale</p>

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

          <div className="pgCustomizerColumn">
            <p className="pgCustomizerLabel">Mat</p>

            {matStyles.map((mat) => (
              <button
                key={mat.id}
                className={matId === mat.id ? "active" : ""}
                onClick={() => setMatId(mat.id)}
              >
                {mat.label}
              </button>
            ))}

            <p className="pgCustomizerLabel pgSpaceLabel">Room</p>

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

            <label className="pgRoomUpload">
              Upload Room Image
              <input
                type="file"
                accept="image/*"
                onChange={handleRoomUpload}
              />
            </label>
          </div>
        </div>

        <div className="pgSaveArea">
          <button onClick={saveViewingStudy}>
            {saved ? "Viewing Study Saved" : "Save Viewing Study"}
          </button>

          <p>
            Saved studies are kept locally in the browser for later viewing.
          </p>
        </div>
      </section>

      <section className="pgEngineSpec">
        <p className="museumEyebrow">FRAME ENGINE</p>

        <h2>
          Modular framing logic for varied work sizes, double mat presentation,
          V-cut windows, brass plate layout, and room installation studies.
        </h2>

        <div className="pgSpecGrid">
          {engineSpecs.map((spec) => (
            <article key={spec.title}>
              <h3>{spec.title}</h3>
              <p>{spec.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
