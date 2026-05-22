export type WorkItem = {
  id: string;
  title: string;
  image: string;
  statement: string;
  originalFile?: string;
};

export type WorkSeries = {
  slug: string;
  code: string;
  title: string;
  jp: string;
  statement: string;
  heroImage: string;
  works: WorkItem[];
};

export const workSeries: WorkSeries[] = [
  {
    "slug": "canvas-botanical-studies",
    "code": "MS-CS",
    "title": "Canvas Botanical Studies",
    "jp": "キャンバスシート作品",
    "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
    "heroImage": "/gallery/canvas-botanical-studies/cover.jpg",
    "works": [
      {
        "id": "MS-CS-001",
        "title": "カシス",
        "image": "/gallery/canvas-botanical-studies/001.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "カシス のコピー.jpg"
      },
      {
        "id": "MS-CS-002",
        "title": "キャンバス あんず",
        "image": "/gallery/canvas-botanical-studies/002.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_あんず のコピー.jpg"
      },
      {
        "id": "MS-CS-003",
        "title": "キャンバス あんず ハーコット",
        "image": "/gallery/canvas-botanical-studies/003.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_あんず_ハーコット.jpg"
      },
      {
        "id": "MS-CS-004",
        "title": "キャンバス すもも ハニーハート",
        "image": "/gallery/canvas-botanical-studies/004.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_すもも_ハニーハート.jpg"
      },
      {
        "id": "MS-CS-005",
        "title": "キャンバス すもも ハリウッド",
        "image": "/gallery/canvas-botanical-studies/005.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_すもも_ハリウッド.jpg"
      },
      {
        "id": "MS-CS-006",
        "title": "キャンバス ぶどう コンコード",
        "image": "/gallery/canvas-botanical-studies/006.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_コンコード.jpg"
      },
      {
        "id": "MS-CS-007",
        "title": "キャンバス ぶどう ゴルビー悟紅玉",
        "image": "/gallery/canvas-botanical-studies/007.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ゴルビー悟紅玉.jpg"
      },
      {
        "id": "MS-CS-008",
        "title": "キャンバス ぶどう ゴールドフィンガー2",
        "image": "/gallery/canvas-botanical-studies/008.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ゴールドフィンガー2.jpg"
      },
      {
        "id": "MS-CS-009",
        "title": "キャンバス ぶどう シャインマスカット",
        "image": "/gallery/canvas-botanical-studies/009.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_シャインマスカット.jpg"
      },
      {
        "id": "MS-CS-010",
        "title": "キャンバス ぶどう シャインマスカット2",
        "image": "/gallery/canvas-botanical-studies/010.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_シャインマスカット2.jpg"
      },
      {
        "id": "MS-CS-011",
        "title": "キャンバス ぶどう スチューベン",
        "image": "/gallery/canvas-botanical-studies/011.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_スチューベン のコピー.jpg"
      },
      {
        "id": "MS-CS-012",
        "title": "キャンバス ぶどう セイベル９１１０",
        "image": "/gallery/canvas-botanical-studies/012.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_セイベル９１１０.jpg"
      },
      {
        "id": "MS-CS-013",
        "title": "キャンバス ぶどう ナイヤガラ",
        "image": "/gallery/canvas-botanical-studies/013.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ナイヤガラ.jpg"
      },
      {
        "id": "MS-CS-014",
        "title": "キャンバス ぶどう ナガノパープル",
        "image": "/gallery/canvas-botanical-studies/014.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ナガノパープル.jpg"
      },
      {
        "id": "MS-CS-015",
        "title": "キャンバス ぶどう ハニーシードレス",
        "image": "/gallery/canvas-botanical-studies/015.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ハニーシードレス.jpg"
      },
      {
        "id": "MS-CS-016",
        "title": "キャンバス ぶどう ピオーネ",
        "image": "/gallery/canvas-botanical-studies/016.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_ピオーネ.jpg"
      },
      {
        "id": "MS-CS-017",
        "title": "キャンバス ぶどう リザマート",
        "image": "/gallery/canvas-botanical-studies/017.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_リザマート.jpg"
      },
      {
        "id": "MS-CS-018",
        "title": "キャンバス ぶどう 黒いバラード",
        "image": "/gallery/canvas-botanical-studies/018.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ぶどう_黒いバラード.jpg"
      },
      {
        "id": "MS-CS-019",
        "title": "キャンバス りんご シナノゴールド",
        "image": "/gallery/canvas-botanical-studies/019.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_シナノゴールド.jpg"
      },
      {
        "id": "MS-CS-020",
        "title": "キャンバス りんご シナノスイート",
        "image": "/gallery/canvas-botanical-studies/020.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_シナノスイート.jpg"
      },
      {
        "id": "MS-CS-021",
        "title": "キャンバス りんご スリムレッド",
        "image": "/gallery/canvas-botanical-studies/021.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_スリムレッド.jpg"
      },
      {
        "id": "MS-CS-022",
        "title": "キャンバス りんご 北斗",
        "image": "/gallery/canvas-botanical-studies/022.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_北斗.jpg"
      },
      {
        "id": "MS-CS-023",
        "title": "キャンバス りんご 名月",
        "image": "/gallery/canvas-botanical-studies/023.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_名月.jpg"
      },
      {
        "id": "MS-CS-024",
        "title": "キャンバス りんご 紅玉",
        "image": "/gallery/canvas-botanical-studies/024.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_紅玉.jpg"
      },
      {
        "id": "MS-CS-025",
        "title": "キャンバス りんご 陽光",
        "image": "/gallery/canvas-botanical-studies/025.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_りんご_陽光.jpg"
      },
      {
        "id": "MS-CS-026",
        "title": "キャンバス ネクタリン サマークリスタル",
        "image": "/gallery/canvas-botanical-studies/026.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_ネクタリン_サマークリスタル.jpg"
      },
      {
        "id": "MS-CS-027",
        "title": "キャンバス プルーン くらしま早生",
        "image": "/gallery/canvas-botanical-studies/027.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_くらしま早生 .jpg"
      },
      {
        "id": "MS-CS-028",
        "title": "キャンバス プルーン アーリーリバー",
        "image": "/gallery/canvas-botanical-studies/028.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_アーリーリバー.jpg"
      },
      {
        "id": "MS-CS-029",
        "title": "キャンバス プルーン オパール",
        "image": "/gallery/canvas-botanical-studies/029.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_オパール のコピー.jpg"
      },
      {
        "id": "MS-CS-030",
        "title": "キャンバス プルーン サンタス",
        "image": "/gallery/canvas-botanical-studies/030.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_サンタス.jpg"
      },
      {
        "id": "MS-CS-031",
        "title": "キャンバス プルーン シュガー",
        "image": "/gallery/canvas-botanical-studies/031.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_シュガー.jpg"
      },
      {
        "id": "MS-CS-032",
        "title": "キャンバス プルーン ローブドサージェン",
        "image": "/gallery/canvas-botanical-studies/032.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_プルーン_ローブドサージェン.jpg"
      },
      {
        "id": "MS-CS-033",
        "title": "キャンバス マスカットベリーA",
        "image": "/gallery/canvas-botanical-studies/033.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_マスカットベリーA.jpg"
      },
      {
        "id": "MS-CS-034",
        "title": "キャンバス マルメロ",
        "image": "/gallery/canvas-botanical-studies/034.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_マルメロ.jpg"
      },
      {
        "id": "MS-CS-035",
        "title": "キャンバス 和梨 南水",
        "image": "/gallery/canvas-botanical-studies/035.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_和梨_南水.jpg"
      },
      {
        "id": "MS-CS-036",
        "title": "キャンバス 和梨 秋月",
        "image": "/gallery/canvas-botanical-studies/036.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_和梨_秋月.jpg"
      },
      {
        "id": "MS-CS-037",
        "title": "キャンバス 房スグリ レッドカラント",
        "image": "/gallery/canvas-botanical-studies/037.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_房スグリ_レッドカラント.jpg"
      },
      {
        "id": "MS-CS-038",
        "title": "キャンバス 桃 ワッサー",
        "image": "/gallery/canvas-botanical-studies/038.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_桃_ワッサー.jpg"
      },
      {
        "id": "MS-CS-039",
        "title": "キャンバス 洋梨 ウインターネリス",
        "image": "/gallery/canvas-botanical-studies/039.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_ウインターネリス のコピー.jpg"
      },
      {
        "id": "MS-CS-040",
        "title": "キャンバス 洋梨 チャピン",
        "image": "/gallery/canvas-botanical-studies/040.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_チャピン のコピー.jpg"
      },
      {
        "id": "MS-CS-041",
        "title": "キャンバス 洋梨 バラード",
        "image": "/gallery/canvas-botanical-studies/041.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_バラード のコピー.jpg"
      },
      {
        "id": "MS-CS-042",
        "title": "キャンバス 洋梨 プレコース",
        "image": "/gallery/canvas-botanical-studies/042.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_プレコース.jpg"
      },
      {
        "id": "MS-CS-043",
        "title": "キャンバス 洋梨 マルゲリット",
        "image": "/gallery/canvas-botanical-studies/043.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_マルゲリット のコピー.jpg"
      },
      {
        "id": "MS-CS-044",
        "title": "キャンバス 洋梨 マルゲリット枝替わりオリジナル品種",
        "image": "/gallery/canvas-botanical-studies/044.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_マルゲリット枝替わりオリジナル品種.jpg"
      },
      {
        "id": "MS-CS-045",
        "title": "キャンバス 洋梨 ラ・フランス",
        "image": "/gallery/canvas-botanical-studies/045.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_ラ・フランス のコピー.jpg"
      },
      {
        "id": "MS-CS-046",
        "title": "キャンバス 洋梨 ラ・フランス",
        "image": "/gallery/canvas-botanical-studies/046.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_ラ・フランス.jpg"
      },
      {
        "id": "MS-CS-047",
        "title": "キャンバス 洋梨 ル・レクチェ",
        "image": "/gallery/canvas-botanical-studies/047.jpg",
        "statement": "Canvas sheet studies of cultivated fruit and botanical form.",
        "originalFile": "キャンバス_洋梨_ル・レクチェ.jpg"
      }
    ]
  },
  {
    "slug": "antique-botanical-studies",
    "code": "MS-AT",
    "title": "Antique Botanical Studies",
    "jp": "アンティーク調作品",
    "statement": "Classical fruit and botanical studies with archival atmosphere.",
    "heroImage": "/gallery/antique-botanical-studies/cover.jpg",
    "works": [
      {
        "id": "MS-AT-001",
        "title": "Akebia",
        "image": "/gallery/antique-botanical-studies/001.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "Akebia.jpg"
      },
      {
        "id": "MS-AT-002",
        "title": "AkiQueen",
        "image": "/gallery/antique-botanical-studies/002.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "AkiQueen.jpg"
      },
      {
        "id": "MS-AT-003",
        "title": "barbank",
        "image": "/gallery/antique-botanical-studies/003.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "barbank.jpg"
      },
      {
        "id": "MS-AT-004",
        "title": "Cherry",
        "image": "/gallery/antique-botanical-studies/004.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "Cherry.jpg"
      },
      {
        "id": "MS-AT-005",
        "title": "devoe",
        "image": "/gallery/antique-botanical-studies/005.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "devoe.jpg"
      },
      {
        "id": "MS-AT-006",
        "title": "kiyoka",
        "image": "/gallery/antique-botanical-studies/006.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "kiyoka.jpg"
      },
      {
        "id": "MS-AT-007",
        "title": "propina",
        "image": "/gallery/antique-botanical-studies/007.jpg",
        "statement": "Classical fruit and botanical studies with archival atmosphere.",
        "originalFile": "propina.jpg"
      }
    ]
  },
  {
    "slug": "vellum-fruit-studies",
    "code": "MS-VL",
    "title": "Vellum Fruit Studies",
    "jp": "羊皮紙プリント作品",
    "statement": "Fruit studies with vellum-like surface and memory.",
    "heroImage": "/gallery/vellum-fruit-studies/cover.jpg",
    "works": [
      {
        "id": "MS-VL-001",
        "title": "Vellum Fruit Studies 01",
        "image": "/gallery/vellum-fruit-studies/001.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "img20171013_007.jpg"
      },
      {
        "id": "MS-VL-002",
        "title": "Vellum Fruit Studies 02",
        "image": "/gallery/vellum-fruit-studies/002.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "img20171013_010_1.jpg"
      },
      {
        "id": "MS-VL-003",
        "title": "MasumiShiohara TheHolyFruition 1",
        "image": "/gallery/vellum-fruit-studies/003.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "MasumiShiohara_TheHolyFruition_1.jpg"
      },
      {
        "id": "MS-VL-004",
        "title": "Vellum Fruit Studies 04",
        "image": "/gallery/vellum-fruit-studies/004.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "MasumiShiohara_TheHolyFruition_2hosei.jpg"
      },
      {
        "id": "MS-VL-005",
        "title": "MasumiShiohara TheHolyFruition 5 1",
        "image": "/gallery/vellum-fruit-studies/005.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "MasumiShiohara_TheHolyFruition_5_1.jpg"
      },
      {
        "id": "MS-VL-006",
        "title": "カベルネソーヴィニヨン",
        "image": "/gallery/vellum-fruit-studies/006.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "カベルネソーヴィニヨン.jpg"
      },
      {
        "id": "MS-VL-007",
        "title": "カベルネフラン",
        "image": "/gallery/vellum-fruit-studies/007.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "カベルネフラン.jpg"
      },
      {
        "id": "MS-VL-008",
        "title": "ケルナー",
        "image": "/gallery/vellum-fruit-studies/008.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ケルナー.jpg"
      },
      {
        "id": "MS-VL-009",
        "title": "シャルドネ",
        "image": "/gallery/vellum-fruit-studies/009.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "シャルドネ.jpg"
      },
      {
        "id": "MS-VL-010",
        "title": "シラー",
        "image": "/gallery/vellum-fruit-studies/010.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "シラー.jpg"
      },
      {
        "id": "MS-VL-011",
        "title": "ソーヴィニヨンブラン",
        "image": "/gallery/vellum-fruit-studies/011.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ソーヴィニヨンブラン.jpg"
      },
      {
        "id": "MS-VL-012",
        "title": "ツヴァイゲルト",
        "image": "/gallery/vellum-fruit-studies/012.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ツヴァイゲルト.jpg"
      },
      {
        "id": "MS-VL-013",
        "title": "ネッビオーロ",
        "image": "/gallery/vellum-fruit-studies/013.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ネッビオーロ.jpg"
      },
      {
        "id": "MS-VL-014",
        "title": "ピノ・ノワール",
        "image": "/gallery/vellum-fruit-studies/014.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ピノ・ノワール.jpg"
      },
      {
        "id": "MS-VL-015",
        "title": "ブラック・クイーン",
        "image": "/gallery/vellum-fruit-studies/015.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "ブラック・クイーン.jpg"
      },
      {
        "id": "MS-VL-016",
        "title": "メルロー",
        "image": "/gallery/vellum-fruit-studies/016.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "メルロー.jpg"
      },
      {
        "id": "MS-VL-017",
        "title": "リースリング",
        "image": "/gallery/vellum-fruit-studies/017.jpg",
        "statement": "Fruit studies with vellum-like surface and memory.",
        "originalFile": "リースリング.jpg"
      }
    ]
  },
  {
    "slug": "black-ground-botanical-works",
    "code": "MS-BG",
    "title": "Black Ground Botanical Works",
    "jp": "黒背景ボタニカル作品",
    "statement": "Cultivated fruit and plant forms isolated against black ground.",
    "heroImage": "/gallery/black-ground-botanical-works/cover.jpg",
    "works": [
      {
        "id": "MS-BG-001",
        "title": "コンフェレンス統合",
        "image": "/gallery/black-ground-botanical-works/001.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "2コンフェレンス統合 - コピー.jpg"
      },
      {
        "id": "MS-BG-002",
        "title": "コンフェレンス統合",
        "image": "/gallery/black-ground-botanical-works/002.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "2コンフェレンス統合.jpg"
      },
      {
        "id": "MS-BG-003",
        "title": "雪晴れ",
        "image": "/gallery/black-ground-botanical-works/003.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "7雪晴れ - コピー.jpg"
      },
      {
        "id": "MS-BG-004",
        "title": "雪晴れ",
        "image": "/gallery/black-ground-botanical-works/004.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "7雪晴れ.jpg"
      },
      {
        "id": "MS-BG-005",
        "title": "kiyo",
        "image": "/gallery/black-ground-botanical-works/005.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "kiyo - コピー.jpg"
      },
      {
        "id": "MS-BG-006",
        "title": "kiyo",
        "image": "/gallery/black-ground-botanical-works/006.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "kiyo.jpg"
      },
      {
        "id": "MS-BG-007",
        "title": "kofuji6",
        "image": "/gallery/black-ground-botanical-works/007.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "kofuji6.jpg"
      },
      {
        "id": "MS-BG-008",
        "title": "Black Ground Botanical Works 08",
        "image": "/gallery/black-ground-botanical-works/008.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "VR9統合sharpender427 - コピー.jpg"
      },
      {
        "id": "MS-BG-009",
        "title": "Black Ground Botanical Works 09",
        "image": "/gallery/black-ground-botanical-works/009.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "VR9統合sharpender427.jpg"
      },
      {
        "id": "MS-BG-010",
        "title": "ウィリアムス(バートレット)",
        "image": "/gallery/black-ground-botanical-works/010.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ウィリアムス(バートレット) - コピー.jpg"
      },
      {
        "id": "MS-BG-011",
        "title": "ウィリアムス(バートレット)",
        "image": "/gallery/black-ground-botanical-works/011.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ウィリアムス(バートレット).jpg"
      },
      {
        "id": "MS-BG-012",
        "title": "オーロラ",
        "image": "/gallery/black-ground-botanical-works/012.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "オーロラ - コピー.jpg"
      },
      {
        "id": "MS-BG-013",
        "title": "オーロラ",
        "image": "/gallery/black-ground-botanical-works/013.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "オーロラ.jpg"
      },
      {
        "id": "MS-BG-014",
        "title": "グランドチャンピオン3雪の日花白くした",
        "image": "/gallery/black-ground-botanical-works/014.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "グランドチャンピオン3雪の日花白くした.jpg"
      },
      {
        "id": "MS-BG-015",
        "title": "Black Ground Botanical Works 15",
        "image": "/gallery/black-ground-botanical-works/015.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "シャワセ0(swpa後に編集色を変えゴミを取る)統合2sharpenderak明るくした.jpg"
      },
      {
        "id": "MS-BG-016",
        "title": "スタークリムソン6",
        "image": "/gallery/black-ground-botanical-works/016.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "スタークリムソン6.jpg"
      },
      {
        "id": "MS-BG-017",
        "title": "セニョール デスぺラン",
        "image": "/gallery/black-ground-botanical-works/017.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "セニョール_デスぺラン.jpg"
      },
      {
        "id": "MS-BG-018",
        "title": "ゼネラルレ クラーク",
        "image": "/gallery/black-ground-botanical-works/018.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ゼネラルレ_クラーク.jpg"
      },
      {
        "id": "MS-BG-019",
        "title": "デボー",
        "image": "/gallery/black-ground-botanical-works/019.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "デボー.jpg"
      },
      {
        "id": "MS-BG-020",
        "title": "ドワイアンヌ デュ コミス",
        "image": "/gallery/black-ground-botanical-works/020.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ドワイアンヌ_デュ_コミス.jpg"
      },
      {
        "id": "MS-BG-021",
        "title": "パスクラサンA3",
        "image": "/gallery/black-ground-botanical-works/021.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "パスクラサンA3.jpg"
      },
      {
        "id": "MS-BG-022",
        "title": "ピノノワール5-2統合（5月6日）",
        "image": "/gallery/black-ground-botanical-works/022.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ピノノワール5-2統合（5月6日）.jpg"
      },
      {
        "id": "MS-BG-023",
        "title": "ピンクレディー実生葉黒消去onaeba509",
        "image": "/gallery/black-ground-botanical-works/023.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ピンクレディー実生葉黒消去onaeba509.jpg"
      },
      {
        "id": "MS-BG-024",
        "title": "ブーレ ボスク(カイザクローネ)",
        "image": "/gallery/black-ground-botanical-works/024.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ブーレ_ボスク(カイザクローネ).jpg"
      },
      {
        "id": "MS-BG-025",
        "title": "ベイラー9psb",
        "image": "/gallery/black-ground-botanical-works/025.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ベイラー9psb.jpg"
      },
      {
        "id": "MS-BG-026",
        "title": "マルゲリット マリーラ",
        "image": "/gallery/black-ground-botanical-works/026.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "マルゲリット_マリーラ.jpg"
      },
      {
        "id": "MS-BG-027",
        "title": "ル レクチェ",
        "image": "/gallery/black-ground-botanical-works/027.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "ル_レクチェ.jpg"
      },
      {
        "id": "MS-BG-028",
        "title": "柴峰4",
        "image": "/gallery/black-ground-botanical-works/028.jpg",
        "statement": "Cultivated fruit and plant forms isolated against black ground.",
        "originalFile": "柴峰4.jpg"
      }
    ]
  },
  {
    "slug": "growth-process",
    "code": "MS-GP",
    "title": "Growth Process",
    "jp": "果物の生育過程",
    "statement": "Agricultural time, growth, observation, and harvest.",
    "heroImage": "/gallery/growth-process/cover.jpg",
    "works": [
      {
        "id": "MS-GP-001",
        "title": "Growth Process 01",
        "image": "/gallery/growth-process/001.jpg",
        "statement": "Agricultural time, growth, observation, and harvest.",
        "originalFile": "Apple_The Process and Farmwork of Fruit Growth_Masumi_Shiohara.jpg"
      },
      {
        "id": "MS-GP-002",
        "title": "Growth Process 02",
        "image": "/gallery/growth-process/002.jpg",
        "statement": "Agricultural time, growth, observation, and harvest.",
        "originalFile": "Muscat_The Process and Farmwork of Fruit Growth_Masumi_Shiohara.jpg"
      },
      {
        "id": "MS-GP-003",
        "title": "Growth Process 03",
        "image": "/gallery/growth-process/003.jpg",
        "statement": "Agricultural time, growth, observation, and harvest.",
        "originalFile": "Pear_The Process and Farmwork of Fruit Growth_Masumi_Shiohara.jpg"
      },
      {
        "id": "MS-GP-004",
        "title": "Growth Process 04",
        "image": "/gallery/growth-process/004.jpg",
        "statement": "Agricultural time, growth, observation, and harvest.",
        "originalFile": "Plum_The Process and Farmwork of Fruit Growth_Masumi_Shiohara.jpg"
      }
    ]
  },
  {
    "slug": "selection-studies",
    "code": "MS-SS",
    "title": "Selection Studies",
    "jp": "育種と淘汰",
    "statement": "Breeding, selection, removal, and the forms left behind.",
    "heroImage": "/gallery/selection-studies/cover.jpg",
    "works": [
      {
        "id": "MS-SS-001",
        "title": "DSF51162",
        "image": "/gallery/selection-studies/001.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF51162 のコピー.jpg"
      },
      {
        "id": "MS-SS-002",
        "title": "DSF5170",
        "image": "/gallery/selection-studies/002.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF5170 のコピー.jpg"
      },
      {
        "id": "MS-SS-003",
        "title": "DSF5180",
        "image": "/gallery/selection-studies/003.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF5180 のコピー.jpg"
      },
      {
        "id": "MS-SS-004",
        "title": "DSF5560",
        "image": "/gallery/selection-studies/004.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF5560 のコピー.jpg"
      },
      {
        "id": "MS-SS-005",
        "title": "DSF5594",
        "image": "/gallery/selection-studies/005.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF5594 のコピー.jpg"
      },
      {
        "id": "MS-SS-006",
        "title": "DSF6009",
        "image": "/gallery/selection-studies/006.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF6009 のコピー.jpg"
      },
      {
        "id": "MS-SS-007",
        "title": "DSF6019",
        "image": "/gallery/selection-studies/007.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF6019 のコピー.jpg"
      },
      {
        "id": "MS-SS-008",
        "title": "DSF6029",
        "image": "/gallery/selection-studies/008.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF6029 のコピー.jpg"
      },
      {
        "id": "MS-SS-009",
        "title": "DSF6034",
        "image": "/gallery/selection-studies/009.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "_DSF6034 のコピー.jpg"
      },
      {
        "id": "MS-SS-010",
        "title": "ゴールドバレット",
        "image": "/gallery/selection-studies/010.jpg",
        "statement": "Breeding, selection, removal, and the forms left behind.",
        "originalFile": "ゴールドバレット のコピー.jpg"
      }
    ]
  },
  {
    "slug": "cultivated-fruit-compositions",
    "code": "MS-CF",
    "title": "Cultivated Fruit Compositions",
    "jp": "育種果実による作品",
    "statement": "Fruit cultivated and composed as artistic material.",
    "heroImage": "/gallery/cultivated-fruit-compositions/cover.jpg",
    "works": [
      {
        "id": "MS-CF-001",
        "title": "私が育種して育てた果物を使ったアート",
        "image": "/gallery/cultivated-fruit-compositions/001.jpg",
        "statement": "Fruit cultivated and composed as artistic material.",
        "originalFile": "6_私が育種して育てた果物を使ったアート.jpg"
      }
    ]
  },
  {
    "slug": "portraits-single-variety",
    "code": "MS-PO",
    "title": "Portraits: Single Variety",
    "jp": "単一品種ポートレイト",
    "statement": "Portraits composed from a single fruit variety.",
    "heroImage": "/gallery/portraits-single-variety/cover.jpg",
    "works": [
      {
        "id": "MS-PO-001",
        "title": "Apple",
        "image": "/gallery/portraits-single-variety/001.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "Apple.jpg"
      },
      {
        "id": "MS-PO-002",
        "title": "bantoh2",
        "image": "/gallery/portraits-single-variety/002.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "bantoh2 のコピー.jpg"
      },
      {
        "id": "MS-PO-003",
        "title": "barbank",
        "image": "/gallery/portraits-single-variety/003.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "barbank.jpg"
      },
      {
        "id": "MS-PO-004",
        "title": "BuddhasHand",
        "image": "/gallery/portraits-single-variety/004.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "BuddhasHand.jpg"
      },
      {
        "id": "MS-PO-005",
        "title": "creemydole",
        "image": "/gallery/portraits-single-variety/005.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "creemydole.jpg"
      },
      {
        "id": "MS-PO-006",
        "title": "devoe",
        "image": "/gallery/portraits-single-variety/006.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "devoe.jpg"
      },
      {
        "id": "MS-PO-007",
        "title": "DoyenneduComice",
        "image": "/gallery/portraits-single-variety/007.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "DoyenneduComice.jpg"
      },
      {
        "id": "MS-PO-008",
        "title": "Grape",
        "image": "/gallery/portraits-single-variety/008.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "Grape.jpg"
      },
      {
        "id": "MS-PO-009",
        "title": "kiyo",
        "image": "/gallery/portraits-single-variety/009.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "kiyo のコピー.jpg"
      },
      {
        "id": "MS-PO-010",
        "title": "kyohoの",
        "image": "/gallery/portraits-single-variety/010.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "kyohoのコピー.jpg"
      },
      {
        "id": "MS-PO-011",
        "title": "Marmelo",
        "image": "/gallery/portraits-single-variety/011.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "Marmelo.jpg"
      },
      {
        "id": "MS-PO-012",
        "title": "momo3",
        "image": "/gallery/portraits-single-variety/012.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "momo3 のコピー.jpg"
      },
      {
        "id": "MS-PO-013",
        "title": "nectarine",
        "image": "/gallery/portraits-single-variety/013.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "nectarine.jpg"
      },
      {
        "id": "MS-PO-014",
        "title": "PasseCrassane",
        "image": "/gallery/portraits-single-variety/014.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "PasseCrassane.jpg"
      },
      {
        "id": "MS-PO-015",
        "title": "Plum",
        "image": "/gallery/portraits-single-variety/015.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "Plum.jpg"
      },
      {
        "id": "MS-PO-016",
        "title": "SINANOSWEET2",
        "image": "/gallery/portraits-single-variety/016.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "SINANOSWEET2.jpg"
      },
      {
        "id": "MS-PO-017",
        "title": "UFO2",
        "image": "/gallery/portraits-single-variety/017.jpg",
        "statement": "Portraits composed from a single fruit variety.",
        "originalFile": "UFO2.jpg"
      }
    ]
  },
  {
    "slug": "portraits-composite-forms",
    "code": "MS-PC",
    "title": "Portraits: Composite Forms",
    "jp": "組み合わせポートレイト",
    "statement": "Composite fruit portraits and constructed presence.",
    "heroImage": "/gallery/portraits-composite-forms/cover.jpg",
    "works": [
      {
        "id": "MS-PC-001",
        "title": "Portraits Composite Forms 01",
        "image": "/gallery/portraits-composite-forms/001.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "109 のコピー.jpg"
      },
      {
        "id": "MS-PC-002",
        "title": "Portraits Composite Forms 02",
        "image": "/gallery/portraits-composite-forms/002.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "36.jpg"
      },
      {
        "id": "MS-PC-003",
        "title": "Portraits Composite Forms 03",
        "image": "/gallery/portraits-composite-forms/003.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "43 のコピー.jpg"
      },
      {
        "id": "MS-PC-004",
        "title": "BuddhasHand4",
        "image": "/gallery/portraits-composite-forms/004.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "BuddhasHand4 のコピー.jpg"
      },
      {
        "id": "MS-PC-005",
        "title": "Conference",
        "image": "/gallery/portraits-composite-forms/005.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "Conference のコピー.jpg"
      },
      {
        "id": "MS-PC-006",
        "title": "CryptoFruition#110",
        "image": "/gallery/portraits-composite-forms/006.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#110.jpg"
      },
      {
        "id": "MS-PC-007",
        "title": "CryptoFruition#114",
        "image": "/gallery/portraits-composite-forms/007.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#114.jpg"
      },
      {
        "id": "MS-PC-008",
        "title": "CryptoFruition#115",
        "image": "/gallery/portraits-composite-forms/008.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#115.jpg"
      },
      {
        "id": "MS-PC-009",
        "title": "CryptoFruition#116",
        "image": "/gallery/portraits-composite-forms/009.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#116.jpg"
      },
      {
        "id": "MS-PC-010",
        "title": "CryptoFruition#5",
        "image": "/gallery/portraits-composite-forms/010.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#5.jpg"
      },
      {
        "id": "MS-PC-011",
        "title": "CryptoFruition#6",
        "image": "/gallery/portraits-composite-forms/011.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#6.jpg"
      },
      {
        "id": "MS-PC-012",
        "title": "CryptoFruition#81",
        "image": "/gallery/portraits-composite-forms/012.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruition#81.jpg"
      },
      {
        "id": "MS-PC-013",
        "title": "CryptoFruitions#2",
        "image": "/gallery/portraits-composite-forms/013.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "CryptoFruitions#2.jpg"
      },
      {
        "id": "MS-PC-014",
        "title": "DoyenneduComice 2",
        "image": "/gallery/portraits-composite-forms/014.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "DoyenneduComice のコピー 2.jpg"
      },
      {
        "id": "MS-PC-015",
        "title": "DoyenneduComice2",
        "image": "/gallery/portraits-composite-forms/015.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "DoyenneduComice2 のコピー.jpg"
      },
      {
        "id": "MS-PC-016",
        "title": "Grand Champion",
        "image": "/gallery/portraits-composite-forms/016.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "Grand Champion のコピー.jpg"
      },
      {
        "id": "MS-PC-017",
        "title": "Grape1 2",
        "image": "/gallery/portraits-composite-forms/017.jpg",
        "statement": "Composite fruit portraits and constructed presence.",
        "originalFile": "Grape1 のコピー 2.jpg"
      }
    ]
  },
  {
    "slug": "color-object-works",
    "code": "MS-CO",
    "title": "Color Object Works",
    "jp": "カラーオブジェクト",
    "statement": "Color object works between photography and sculpture.",
    "heroImage": "/gallery/color-object-works/cover.jpg",
    "works": [
      {
        "id": "MS-CO-001",
        "title": "LeLectier MasumiShiohara",
        "image": "/gallery/color-object-works/001.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "LeLectier_MasumiShiohara のコピー.jpg"
      },
      {
        "id": "MS-CO-002",
        "title": "Color Object Works 02",
        "image": "/gallery/color-object-works/002.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "SWPA2023_Masumi_Shiohara のコピー.jpg"
      },
      {
        "id": "MS-CO-003",
        "title": "Vitis vinifera 'Riesling'（白）",
        "image": "/gallery/color-object-works/003.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "Vitis vinifera 'Riesling'（白）.jpg"
      },
      {
        "id": "MS-CO-004",
        "title": "ギャンルビージュンカラー2",
        "image": "/gallery/color-object-works/004.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "ギャンルビージュンカラー2 のコピー.jpg"
      },
      {
        "id": "MS-CO-005",
        "title": "シャイン2でリース2",
        "image": "/gallery/color-object-works/005.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "シャイン2でリース2 のコピー.jpg"
      },
      {
        "id": "MS-CO-006",
        "title": "Color Object Works 06",
        "image": "/gallery/color-object-works/006.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "修正版20250113MasumiShiohara_Fruits_Riverr_1_1.jpg"
      },
      {
        "id": "MS-CO-007",
        "title": "明るい3",
        "image": "/gallery/color-object-works/007.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "明るい3.jpg"
      },
      {
        "id": "MS-CO-008",
        "title": "明るい１",
        "image": "/gallery/color-object-works/008.jpg",
        "statement": "Color object works between photography and sculpture.",
        "originalFile": "明るい１.jpg"
      }
    ]
  },
  {
    "slug": "monochrome-object-works",
    "code": "MS-MO",
    "title": "Monochrome Object Works",
    "jp": "モノクロオブジェクト",
    "statement": "Monochrome object works emphasizing form and shadow.",
    "heroImage": "/gallery/monochrome-object-works/cover.jpg",
    "works": [
      {
        "id": "MS-MO-001",
        "title": "Masumi Shiohara",
        "image": "/gallery/monochrome-object-works/001.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "#01_Masumi Shiohara.jpg"
      },
      {
        "id": "MS-MO-002",
        "title": "Masumi Shiohara",
        "image": "/gallery/monochrome-object-works/002.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "#02_Masumi Shiohara.jpg"
      },
      {
        "id": "MS-MO-003",
        "title": "Masumi Shiohara",
        "image": "/gallery/monochrome-object-works/003.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "#03_Masumi Shiohara.jpg"
      },
      {
        "id": "MS-MO-004",
        "title": "Monochrome Object Works 04",
        "image": "/gallery/monochrome-object-works/004.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "13.jpg"
      },
      {
        "id": "MS-MO-005",
        "title": "buddhashand426",
        "image": "/gallery/monochrome-object-works/005.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "buddhashand426.jpg"
      },
      {
        "id": "MS-MO-006",
        "title": "Gdress5",
        "image": "/gallery/monochrome-object-works/006.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "Gdress5 のコピー.jpg"
      },
      {
        "id": "MS-MO-007",
        "title": "Monochrome Object Works 07",
        "image": "/gallery/monochrome-object-works/007.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "HA04223 のコピー.jpg"
      },
      {
        "id": "MS-MO-008",
        "title": "HoneySeedless（黒）",
        "image": "/gallery/monochrome-object-works/008.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "HoneySeedless（黒）.jpg"
      },
      {
        "id": "MS-MO-009",
        "title": "Monochrome Object Works 09",
        "image": "/gallery/monochrome-object-works/009.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "MasumiShiohara_Sonyworldphotographyawards2021 のコピー.jpg"
      },
      {
        "id": "MS-MO-010",
        "title": "Pierced Pear",
        "image": "/gallery/monochrome-object-works/010.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "Pierced Pear.jpg"
      },
      {
        "id": "MS-MO-011",
        "title": "rubi-goldfinger",
        "image": "/gallery/monochrome-object-works/011.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "rubi-goldfinger .jpg"
      },
      {
        "id": "MS-MO-012",
        "title": "DSF1930",
        "image": "/gallery/monochrome-object-works/012.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "_DSF1930 のコピー.jpg"
      },
      {
        "id": "MS-MO-013",
        "title": "DSF38867",
        "image": "/gallery/monochrome-object-works/013.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "_DSF38867 のコピー.jpg"
      },
      {
        "id": "MS-MO-014",
        "title": "DSF5699-2 1",
        "image": "/gallery/monochrome-object-works/014.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "_DSF5699-2 のコピー_1.jpg"
      },
      {
        "id": "MS-MO-015",
        "title": "DSF5753-3 bba",
        "image": "/gallery/monochrome-object-works/015.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "_DSF5753-3 bba.jpg"
      },
      {
        "id": "MS-MO-016",
        "title": "DSF5753-3 bba 1",
        "image": "/gallery/monochrome-object-works/016.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "_DSF5753-3 bba_1.jpg"
      },
      {
        "id": "MS-MO-017",
        "title": "かぼちゃ梨2",
        "image": "/gallery/monochrome-object-works/017.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "かぼちゃ梨2 のコピー.jpg"
      },
      {
        "id": "MS-MO-018",
        "title": "タイラナブドウ2",
        "image": "/gallery/monochrome-object-works/018.jpg",
        "statement": "Monochrome object works emphasizing form and shadow.",
        "originalFile": "タイラナブドウ2 のコピー.jpg"
      }
    ]
  },
  {
    "slug": "improvisations-of-a-fruit-breeder",
    "code": "MS-IF",
    "title": "Improvisations of a Fruit Breeder",
    "jp": "果物農家の即興",
    "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
    "heroImage": "/gallery/improvisations-of-a-fruit-breeder/cover.jpg",
    "works": [
      {
        "id": "MS-IF-001",
        "title": "Improvisations of a Fruit Breeder 01",
        "image": "/gallery/improvisations-of-a-fruit-breeder/001.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_1_A Bunch of Grapes Shaped Like a Diamond with a Hole.jpg"
      },
      {
        "id": "MS-IF-002",
        "title": "Improvisations of a Fruit Breeder 02",
        "image": "/gallery/improvisations-of-a-fruit-breeder/002.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_2_A Bunch Shaped by My Breeding.jpg"
      },
      {
        "id": "MS-IF-003",
        "title": "Improvisations of a Fruit Breeder 03",
        "image": "/gallery/improvisations-of-a-fruit-breeder/003.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_3_A Bunch Unchosen by Breeding.jpg"
      },
      {
        "id": "MS-IF-004",
        "title": "Improvisations of a Fruit Breeder 04",
        "image": "/gallery/improvisations-of-a-fruit-breeder/004.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_4_A flat-shaped bunch of grapes.jpg"
      },
      {
        "id": "MS-IF-005",
        "title": "Improvisations of a Fruit Breeder 05",
        "image": "/gallery/improvisations-of-a-fruit-breeder/005.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_5_A Lemniscate-Shaped Bunch of Grapes.jpg"
      },
      {
        "id": "MS-IF-006",
        "title": "Improvisations of a Fruit Breeder 06",
        "image": "/gallery/improvisations-of-a-fruit-breeder/006.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_6_A Rotten Wreath of Grapes.jpg"
      },
      {
        "id": "MS-IF-007",
        "title": "Improvisations of a Fruit Breeder 07",
        "image": "/gallery/improvisations-of-a-fruit-breeder/007.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_7_A Side Face Shaped by Grapes.jpg"
      },
      {
        "id": "MS-IF-008",
        "title": "Improvisations of a Fruit Breeder 08",
        "image": "/gallery/improvisations-of-a-fruit-breeder/008.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_8_A Wreath of Grapes and My Eye as a Breeder.jpg"
      },
      {
        "id": "MS-IF-009",
        "title": "Improvisations of a Fruit Breeder 09",
        "image": "/gallery/improvisations-of-a-fruit-breeder/009.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_9_Two Grape Varieties in a Single Bunch.jpg"
      },
      {
        "id": "MS-IF-010",
        "title": "Improvisations of a Fruit Breeder 10",
        "image": "/gallery/improvisations-of-a-fruit-breeder/010.jpg",
        "statement": "Improvised fruit forms shaped by breeding, selection, and the eye of a fruit grower.",
        "originalFile": "Masumi_Shiohara_9_Varied Forms Within a Single Bunch.jpg"
      }
    ]
  }
];

export function getWorkSeries(slug: string) {
  return workSeries.find((series) => series.slug === slug);
}

