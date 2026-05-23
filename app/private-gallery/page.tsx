"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";

const MIN_MM = 210;
const MAX_MM = 2060;
const FRAME_MODULE_MM = 32;
const CORNER_MM = 96;
const MIN_MAT_MM = 45;
const MAX_MAT_MM = 180;
const MAT_OVERLAP_MM = 1;

const works = [
  {
    id: "MS-CS",
    title: "Canvas Botanical Studies",
    image: "/portfolio/canvas-botanical-studies/canvas-botanical-studies-01.jpg",
    statement: "Canvas sheet studies of cultivated fruit and botanical form.",
  },
  {
    id: "MS-AT",
    title: "Antique Botanical Studies",
    image: "/portfolio/antique-botanical-studies/antique-botanical-studies-01.jpg",
    statement: "Antique botanical studies with archival atmosphere.",
  },
  {
    id: "MS-VL",
    title: "Vellum Fruit Studies",
    image: "/portfolio/vellum-fruit-studies/vellum-fruit-studies-01.jpg",
    statement: "Fruit studies with vellum-like surface and memory.",
  },
  {
    id: "MS-BG",
    title: "Black Ground Botanical Works",
    image: "/portfolio/black-ground-botanical-works/black-ground-botanical-works-01.jpg",
    statement: "Botanical works isolated against a dark ground.",
  },
  {
    id: "MS-GP",
    title: "Growth Process",
    image: "/portfolio/growth-process/growth-process-01.jpg",
    statement: "Agricultural time, growth, observation, and harvest.",
  },
  {
    id: "MS-SS",
    title: "Selection Studies",
    image: "/portfolio/selection-studies/selection-studies-01.jpg",
    statement: "Breeding, selection, removal, and the forms left behind.",
  },
  {
    id: "MS-CF",
    title: "Cultivated Fruit Compositions",
    image: "/portfolio/cultivated-fruit-compositions/cultivated-fruit-compositions-01.jpg",
    statement: "Fruit cultivated and composed as artistic material.",
  },
  {
    id: "MS-PO",
    title: "Portraits: Single Variety",
    image: "/portfolio/portraits-single-variety/portraits-single-variety-01.jpg",
    statement: "Single-variety fruit portraits.",
  },
  {
    id: "MS-PC",
    title: "Portraits: Composite Forms",
    image: "/portfolio/portraits-composite-forms/portraits-composite-forms-01.jpg",
    statement: "Composite fruit portraits and constructed presence.",
  },
  {
    id: "MS-CO",
    title: "Color Object Works",
    image: "/portfolio/color-object-works/color-object-works-01.jpg",
    statement: "Color object works between photography and sculpture.",
  },
  {
    id: "MS-MO",
    title: "Monochrome Object Works",
    image: "/portfolio/monochrome-object-works/monochrome-object-works-01.jpg",
    statement: "Monochrome object works emphasizing form and shadow.",
  },
  {
    id: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    image: "/portfolio/improvisations-of-a-fruit-breeder/improvisations-of-a-fruit-breeder-01.jpg",
    statement: "Improvised fruit forms shaped by breeding and selection.",
  },
];

const frameStyles = [
  {
    id: "modern-m1",
    group: "Modern",
    label: "M-1 Deep Black Linear",
    description: "Deep black linear frame for contemporary photographic works.",
  },
  {
    id: "modern-m2",
    group: "Modern",
    label: "M-2 Graphite Shadow",
    description: "Satin graphite frame with quiet architectural depth.",
  },
  {
    id: "modern-m3",
    group: "Modern",
    label: "M-3 Ivory Minimal",
    description: "Warm ivory minimal frame for light gallery presentation.",
  },
  {
    id: "elegant-e1",
    group: "Elegant",
    label: "E-1 Champagne Gold Line",
    description: "Black frame with refined champagne gold inner line.",
  },
  {
    id: "elegant-e2",
    group: "Elegant",
    label: "E-2 Pearl Silver Line",
    description: "Black frame with discreet pearl silver detail.",
  },
  {
    id: "elegant-e3",
    group: "Elegant",
    label: "E-3 Dark Bronze Lacquer",
    description: "Dark bronze lacquer frame with maison-like depth.",
  },
  {
    id: "chic-c1",
    group: "Chic",
    label: "C-1 Wide Matte Black",
    description: "Wide matte black frame with quiet salon presence.",
  },
  {
    id: "chic-c2",
    group: "Chic",
    label: "C-2 Gunmetal Soft Edge",
    description: "Gunmetal frame with softened contemporary bevel.",
  },
  {
    id: "chic-c3",
    group: "Chic",
    label: "C-3 Dark Brown Minimal",
    description: "Dark brown minimal frame for private rooms.",
  },
  {
    id: "wood-w1",
    group: "Wood Grain",
    label: "W-1 Natural Oak",
    description: "Natural oak frame with warm visible grain.",
  },
  {
    id: "wood-w2",
    group: "Wood Grain",
    label: "W-2 Walnut Brown",
    description: "Walnut brown frame for collector residence atmosphere.",
  },
  {
    id: "wood-w3",
    group: "Wood Grain",
    label: "W-3 Dark Ebony",
    description: "Dark ebony wood frame with deep quiet grain.",
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
    id: "loft",
    label: "Contemporary Loft",
    description: "Architectural collector loft atmosphere.",
  },
  {
    id: "custom",
    label: "Private Room Study",
    description: "Uploaded room image for private placement simulation.",
  },
];

const quickSizes = [
  {
    label: "A4",
    width: 210,
    height: 297,
  },
  {
    label: "A3",
    width: 297,
    height: 420,
  },
  {
    label: "A2",
    width: 420,
    height: 594,
  },
  {
    label: "A1",
    width: 594,
    height: 841,
  },
  {
    label: "B1",
    width: 728,
    height: 1030,
  },
  {
    label: "B0",
    width: 1030,
    height: 1456,
  },
  {
    label: "B0 × 2",
    width: 1456,
    height: 2060,
  },
];

function clampDimension(value: number) {
  if (Number.isNaN(value)) {
    return MIN_MM;
  }

  return Math.min(MAX_MM, Math.max(MIN_MM, Math.round(value)));
}

function getPlateMetrics(title: string) {
  const length = title.length;

  if (length <= 16) {
    return {
      width: "230px",
      fontSize: "14px",
      letterSpacing: "0.1em",
    };
  }

  if (length <= 26) {
    return {
      width: "310px",
      fontSize: "12px",
      letterSpacing: "0.075em",
    };
  }

  if (length <= 38) {
    return {
      width: "410px",
      fontSize: "11px",
      letterSpacing: "0.055em",
    };
  }

  return {
    width: "500px",
    fontSize: "10px",
    letterSpacing: "0.035em",
  };
}

function calculateMatAndFrame(widthMm: number, heightMm: number) {
  const targetInnerWidth = widthMm + MIN_MAT_MM * 2;
  const targetInnerHeight = heightMm + MIN_MAT_MM * 2;

  const repeatX = Math.max(
    1,
    Math.round((targetInnerWidth - CORNER_MM * 2) / FRAME_MODULE_MM)
  );

  const repeatY = Math.max(
    1,
    Math.round((targetInnerHeight - CORNER_MM * 2) / FRAME_MODULE_MM)
  );

  const correctedInnerWidth = CORNER_MM * 2 + repeatX * FRAME_MODULE_MM;
  const correctedInnerHeight = CORNER_MM * 2 + repeatY * FRAME_MODULE_MM;

  const matX = Math.min(
    MAX_MAT_MM,
    Math.max(MIN_MAT_MM, Math.round((correctedInnerWidth - widthMm) / 2))
  );

  const matY = Math.min(
    MAX_MAT_MM,
    Math.max(MIN_MAT_MM, Math.round((correctedInnerHeight - heightMm) / 2))
  );

  return {
    repeatX,
    repeatY,
    matX,
    matY,
    correctedInnerWidth,
    correctedInnerHeight,
  };
}

export default function PrivateGalleryPage() {
  const [workId, setWorkId] = useState("MS-BG");
  const [frameId, setFrameId] = useState("elegant-e1");
  const [matId, setMatId] = useState("warm");
  const [roomId, setRoomId] = useState("salon");
  const [artWidthMm, setArtWidthMm] = useState(420);
  const [artHeightMm, setArtHeightMm] = useState(594);
  const [uploadedRoom, setUploadedRoom] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const selectedWork = useMemo(() => {
    return works.find((work) => work.id === workId) ?? works[0];
  }, [workId]);

  const selectedRoom = useMemo(() => {
    return rooms.find((room) => room.id === roomId) ?? rooms[0];
  }, [roomId]);

  const plateMetrics = useMemo(() => {
    return getPlateMetrics(selectedWork.title);
  }, [selectedWork.title]);

  const frameCalculation = useMemo(() => {
    return calculateMatAndFrame(artWidthMm, artHeightMm);
  }, [artWidthMm, artHeightMm]);

  const matPaddingPx = Math.round(
    Math.max(28, Math.min(70, Math.min(frameCalculation.matX, frameCalculation.matY) * 0.72))
  );

  const matLipPx = artWidthMm <= 500 || artHeightMm <= 500 ? 3 : 2;

  const displayFrameWidth = Math.round(
    360 + ((artWidthMm - MIN_MM) / (MAX_MM - MIN_MM)) * 420
  );

  const studioVars = {
    "--precision-frame-width": `${displayFrameWidth}px`,
    "--precision-frame-thickness": "34px",
    "--precision-corner-size": "66px",
    "--precision-art-ratio": `${artWidthMm} / ${artHeightMm}`,
    "--precision-mat-padding": `${matPaddingPx}px`,
    "--precision-mat-lip": `${matLipPx}px`,
    "--precision-plate-width": plateMetrics.width,
    "--precision-plate-font-size": plateMetrics.fontSize,
    "--precision-plate-letter-spacing": plateMetrics.letterSpacing,
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
      if (parsed.artWidthMm) setArtWidthMm(clampDimension(parsed.artWidthMm));
      if (parsed.artHeightMm) setArtHeightMm(clampDimension(parsed.artHeightMm));
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
        artWidthMm,
        artHeightMm,
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
    <main className="precisionGalleryPage">
      <section className="precisionGalleryShell">
        <section className="precisionPreview">
          <div className="precisionPreviewHeader">
            <p>PRIVATE VIEWING ROOM</p>
            <span>MASUMI SHIOHARA</span>
          </div>

          <div
            className={`precisionRoom precisionRoom-${roomId}`}
            style={studioVars}
          >
            {roomId === "custom" && uploadedRoom ? (
              <img
                className="precisionCustomRoom"
                src={uploadedRoom}
                alt="Uploaded room"
              />
            ) : null}

            <div className="precisionSpotlight" />

            <div className={`precisionFramedWork frame-${frameId} mat-${matId}`}>
              <div className="precisionFrameShell">
                <div className="precisionFramePart precisionCorner precisionCornerTL" />
                <div className="precisionFramePart precisionCorner precisionCornerTR" />
                <div className="precisionFramePart precisionCorner precisionCornerBL" />
                <div className="precisionFramePart precisionCorner precisionCornerBR" />

                <div className="precisionFramePart precisionEdge precisionEdgeTop" />
                <div className="precisionFramePart precisionEdge precisionEdgeBottom" />
                <div className="precisionFramePart precisionEdge precisionEdgeLeft" />
                <div className="precisionFramePart precisionEdge precisionEdgeRight" />

                <div className="precisionDoubleMat">
                  <div className="precisionTopMat">
                    <div className="precisionArtworkWindow">
                      <img
                        src={selectedWork.image}
                        alt={selectedWork.title}
                        onError={(event) => {
                          event.currentTarget.src = "/botanical.jpg";
                        }}
                      />
                    </div>
                  </div>

                  <div className="precisionBrassPlate">
                    <span>{selectedWork.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="precisionCaption">
            <p>{selectedWork.id}</p>
            <h2>{selectedWork.title}</h2>
            <span>{selectedWork.statement}</span>
            <small>
              Artwork visible edge-to-edge. Mat lip overlaps all four sides by
              approximately {MAT_OVERLAP_MM}mm.
            </small>
          </div>
        </section>

        <aside className="precisionControls">
          <div className="precisionControlsHeader">
            <p>VIEWING CONFIGURATION</p>
            <h1>
              Framing
              <br />
              & Installation
            </h1>
          </div>

          <div className="precisionControlGroup">
            <h2>Work</h2>

            <div className="precisionWorkButtons">
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

          <div className="precisionControlGroup">
            <h2>Frame</h2>

            <div className="precisionOptionGrid">
              {frameStyles.map((frame) => (
                <button
                  key={frame.id}
                  className={frameId === frame.id ? "active" : ""}
                  onClick={() => setFrameId(frame.id)}
                >
                  <span>{frame.group}</span>
                  {frame.label}
                </button>
              ))}
            </div>
          </div>

          <div className="precisionControlGroup">
            <h2>Mat</h2>

            <div className="precisionOptionGrid three">
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

          <div className="precisionControlGroup">
            <h2>Continuous Size</h2>

            <div className="precisionSizeQuick">
              {quickSizes.map((size) => (
                <button
                  key={size.label}
                  onClick={() => {
                    setArtWidthMm(size.width);
                    setArtHeightMm(size.height);
                  }}
                >
                  {size.label}
                </button>
              ))}
            </div>

            <div className="precisionDimensionGrid">
              <label>
                Width mm
                <input
                  type="number"
                  min={MIN_MM}
                  max={MAX_MM}
                  value={artWidthMm}
                  onChange={(event) => {
                    setArtWidthMm(clampDimension(Number(event.target.value)));
                  }}
                />
              </label>

              <label>
                Height mm
                <input
                  type="number"
                  min={MIN_MM}
                  max={MAX_MM}
                  value={artHeightMm}
                  onChange={(event) => {
                    setArtHeightMm(clampDimension(Number(event.target.value)));
                  }}
                />
              </label>
            </div>

            <label className="precisionRange">
              Width
              <input
                type="range"
                min={MIN_MM}
                max={MAX_MM}
                step={1}
                value={artWidthMm}
                onChange={(event) => {
                  setArtWidthMm(clampDimension(Number(event.target.value)));
                }}
              />
            </label>

            <label className="precisionRange">
              Height
              <input
                type="range"
                min={MIN_MM}
                max={MAX_MM}
                step={1}
                value={artHeightMm}
                onChange={(event) => {
                  setArtHeightMm(clampDimension(Number(event.target.value)));
                }}
              />
            </label>

            <p className="precisionEngineReadout">
              Edge repeat: {frameCalculation.repeatX} × {frameCalculation.repeatY}
              <br />
              Mat correction: {frameCalculation.matX}mm / {frameCalculation.matY}mm
            </p>
          </div>

          <div className="precisionControlGroup">
            <h2>Room</h2>

            <div className="precisionOptionGrid">
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

            <label className="precisionUploadButton">
              Private Room Study
              <input
                type="file"
                accept="image/*"
                onChange={handleRoomUpload}
              />
            </label>
          </div>

          <div className="precisionSave">
            <button onClick={saveViewingStudy}>
              {saved ? "Viewing Study Saved" : "Save Viewing Study"}
            </button>

            <p>
              Configuration is saved locally. Frame corners are fixed, sides are
              repeated, and mat correction absorbs size error.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
