"use client";

import { useEffect, useMemo, useState } from "react";

const works = [
  {
    id: "MS-CS",
    title: "Canvas Botanical Studies",
    image: "/series/canvas-sheet.jpg",
    statement: "Canvas sheet studies of cultivated fruit and botanical form.",
  },
  {
    id: "MS-AT",
    title: "Antique Botanical Studies",
    image: "/series/antique-botanical.jpg",
    statement: "Antique botanical studies with archival atmosphere.",
  },
  {
    id: "MS-VL",
    title: "Vellum Fruit Studies",
    image: "/series/parchment-vellum.jpg",
    statement: "Fruit studies with vellum-like surface and memory.",
  },
  {
    id: "MS-BG",
    title: "Black Ground Botanical Works",
    image: "/series/black-ground-botanical.jpg",
    statement: "Botanical works isolated against a dark ground.",
  },
  {
    id: "MS-GP",
    title: "Growth Process",
    image: "/series/growth-process.jpg",
    statement: "Agricultural time, growth, observation, and harvest.",
  },
  {
    id: "MS-SS",
    title: "Selection Studies",
    image: "/series/selection-study.jpg",
    statement: "Breeding, selection, removal, and the forms left behind.",
  },
  {
    id: "MS-CF",
    title: "Cultivated Fruit Compositions",
    image: "/series/cultivated-fruit-composition.jpg",
    statement: "Fruit cultivated and composed as artistic material.",
  },
  {
    id: "MS-PO",
    title: "Portraits: Single Variety",
    image: "/series/portrait-single-variety.jpg",
    statement: "Single-variety fruit portraits.",
  },
  {
    id: "MS-PC",
    title: "Portraits: Composite Forms",
    image: "/series/portrait-composition.jpg",
    statement: "Composite fruit portraits and constructed presence.",
  },
  {
    id: "MS-CO",
    title: "Color Object Works",
    image: "/series/color-object.jpg",
    statement: "Color object works between photography and sculpture.",
  },
  {
    id: "MS-MO",
    title: "Monochrome Object Works",
    image: "/series/monochrome-object.jpg",
    statement: "Monochrome object works emphasizing form and shadow.",
  },
  {
    id: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    image: "/series/improvisation-object-series.jpg",
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
    description: "Aged wood and classical botanical atmosphere.",
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
    id: "dark",
    label: "Charcoal Double Mat",
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
    id: "custom",
    label: "Your Room",
    description: "Upload a room image for a future placement simulation.",
  },
];

export default function PrivateGalleryPage() {
  const [workId, setWorkId] = useState("MS-BG");
  const [frameId, setFrameId] = useState("elegant");
  const [matId, setMatId] = useState("warm");
  const [roomId, setRoomId] = useState("salon");
  const [uploadedRoom, setUploadedRoom] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selectedWork = useMemo(
    () => works.find((work) => work.id === workId) ?? works[0],
    [workId]
  );

  const selectedFrame = useMemo(
    () => frameStyles.find((frame) => frame.id === frameId) ?? frameStyles[0],
    [frameId]
  );

  const selectedMat = useMemo(
    () => matStyles.find((mat) => mat.id === matId) ?? matStyles[0],
    [matId]
  );

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === roomId) ?? rooms[0],
    [roomId]
  );

  useEffect(() => {
    const savedConfig = window.localStorage.getItem("masumi-private-gallery");

    if (!savedConfig) return;

    try {
      const parsed = JSON.parse(savedConfig);

      if (parsed.workId) setWorkId(parsed.workId);
      if (parsed.frameId) setFrameId(parsed.frameId);
      if (parsed.matId) setMatId(parsed.matId);
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
        roomId,
      })
    );

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 1800);
  }

  function handleRoomUpload(event: React.ChangeEvent<HTMLInputElement>) {
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
          works. Frame, mat, plate, room, and lighting are treated as part of the
          work’s presentation.
        </p>
      </section>

      <section className={`privateViewingStage room-${roomId}`}>
        {roomId === "custom" && uploadedRoom ? (
          <img
            className="customRoomImage"
            src={uploadedRoom}
            alt="Uploaded room"
          />
        ) : null}

        <div className={`framedWork frame-${frameId} mat-${matId}`}>
          <div className="frameShell">
            <div className="doubleMat">
              <div className="vCutWindow">
                <img src={selectedWork.image} alt={selectedWork.title} />
              </div>

              <div className="brassPlate">
                <span>{selectedWork.title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="privateWorkText">
          <p>{selectedWork.id}</p>
          <h2>{selectedWork.title}</h2>
          <span>{selectedWork.statement}</span>
        </div>
      </section>

      <section className="privateCustomizer">
        <div className="customizerHeader">
          <p className="museumEyebrow">VIEWING CONFIGURATION</p>

          <h2>
            Configure the framed work for a private gallery presentation.
          </h2>
        </div>

        <div className="customizerGrid">
          <div className="customizerColumn">
            <p className="customizerLabel">Work</p>

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

          <div className="customizerColumn">
            <p className="customizerLabel">Frame</p>

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

          <div className="customizerColumn">
            <p className="customizerLabel">Mat</p>

            {matStyles.map((mat) => (
              <button
                key={mat.id}
                className={matId === mat.id ? "active" : ""}
                onClick={() => setMatId(mat.id)}
              >
                {mat.label}
              </button>
            ))}

            <p className="customizerLabel roomLabel">Room</p>

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

            <label className="roomUpload">
              Upload Room Image
              <input
                type="file"
                accept="image/*"
                onChange={handleRoomUpload}
              />
            </label>
          </div>
        </div>

        <div className="customizerSave">
          <button onClick={saveViewingStudy}>
            {saved ? "Viewing Study Saved" : "Save Viewing Study"}
          </button>

          <p>
            Future version: scale-aware frame parts, AI-generated room views,
            custom room simulation, and brass plate rendering.
          </p>
        </div>
      </section>

      <section className="frameEngineNote">
        <p className="museumEyebrow">FRAME ENGINE</p>

        <h2>
          The final frame system will use modular frame parts calculated for
          each work size, from small formats to large-scale presentation.
        </h2>

        <p>
          Modern, Elegant, Antique, Chic, Urban, and Wood Carved frames will be
          built from shared-scale parts, with double mat, V-cut window, and
          brass plate layout.
        </p>
      </section>
    </main>
  );
}
