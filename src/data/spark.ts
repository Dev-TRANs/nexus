// NEXUS SPARK 開催情報。
// 新しい開催は events に1件追加するだけ。開催日(date)を過ぎると、
// 自動で「次回開催」から「これまでの開催」側に移ります。

export interface TimetableItem {
  time: string;
  title: string;
  desc?: string;
  minor?: boolean; // 休憩など、控えめに表示する項目
}

export interface SparkEvent {
  id: string;
  name: string;
  date: string; // YYYY-MM-DD (JST)
  dateLabel: string;
  time?: string;
  venue: string;
  theme?: string;
  audience?: string;
  peatixUrl?: string;
  noteUrl?: string; // 開催レポート等
  summary: string;
  category?: string; // 区分（例：サイドイベント）
  organizer?: string;
  lead?: string; // キャッチコピー
  body?: string[]; // 本文（段落）
  commitment?: { title: string; body: string };
  recommended?: string[];
  recommendedNote?: string;
  timetable?: TimetableItem[];
  timetableNote?: string;
  rules?: string[]; // ご参加にあたって
  notes?: string[]; // チケット等の注記
}

export const events: SparkEvent[] = [
  {
    id: "kansai-2027",
    name: "NEXUS SPARK KANSAI 2027",
    date: "2027-02-14",
    dateLabel: "2027.02.14 SUN",
    time: "受付 12:00／開演 13:00／終了予定 19:00",
    venue: "GROWTH京都河原町",
    theme: "関西から、日本全国へ。",
    audience: "学生・企業・起業家・行政・金融機関など",
    category: "Global Startup EXPO 2026（GSE2026）サイドイベント",
    organizer: "学生団体NEXUS LAB",
    peatixUrl: "https://peatix.com/event/5204212",
    noteUrl: "https://note.com/nexusspark/n/nec08aeba3c9d",
    summary:
      "学生・企業・起業家・行政・金融機関など、多様な立場の参加者が混成チームを組み、地域や企業が抱える課題と向き合う共創イベントです。",
    lead: "「面白かった」で終わらせない。「アイデアが生まれた」だけでも終わらせない。",
    body: [
      "NEXUS SPARK KANSAIは、学生・企業・起業家・行政・金融機関など、多様な立場の参加者が混成チームを組み、地域や企業が抱える課題と向き合う共創イベントです。テーマは「関西から、日本全国へ。」",
      "所属や年齢、業界の枠を越えて対話し、課題の背景を深掘りしながら、アイデアを具体的な企画へと発展させます。",
      "本イベントは、Global Startup EXPO 2026（GSE2026）のサイドイベントとして正式に承認されています。GSE2026を通じて生まれる新たな接点や挑戦の機運を、関西における具体的な共創・実証・事業化へつなげます。",
    ],
    commitment: {
      title: "90-DAY COMMITMENT",
      body: "最終発表をゴールにするのではなく、イベント終了時には、次回協議の日程、担当窓口、実行する内容などを整理します。イベント後90日間の具体的な行動や、実証・事業化につながる最初の一歩を目指します。",
    },
    recommended: [
      "何かに挑戦したいが、最初の一歩を探している学生",
      "企業や行政、起業家と一緒に地域・社会課題を考えたい方",
      "自分のアイデアを具体的な企画に発展させたい方",
      "新規事業、地域共創、オープンイノベーションに関心がある方",
      "若者との共創や次世代人材との接点を求めている企業・団体の方",
      "事業化や実証につながる新たな連携先を探している方",
    ],
    recommendedNote: "起業経験や専門知識は必要ありません。まだ明確なアイデアがない方も参加できます。",
    timetable: [
      { time: "12:00〜13:00", title: "受付・SPARK MEETUP", desc: "テーマカードを使った交流と仲間探しを行います。初参加の方や、一人で参加される方も自然に会話へ入れる時間です。" },
      { time: "13:00〜13:15", title: "オープニング", desc: "イベントの目的、当日の進め方、目指す成果について共有します。" },
      { time: "13:15〜13:35", title: "INSPIRATION SESSION", desc: "関西における地域共創や新規事業、社会課題への挑戦について、ゲストから視点や実践事例を共有いただきます。" },
      { time: "13:35〜14:10", title: "OPEN CHALLENGE", desc: "企業・行政・地域・起業家等から、参加者とともに考えたい課題やテーマを提示します。" },
      { time: "14:10〜15:30", title: "SPARK DISCOVERY", desc: "混成チームで課題の背景を掘り下げ、誰のどのような課題を解決するのかを整理します。" },
      { time: "15:30〜15:45", title: "休憩", minor: true },
      { time: "15:45〜17:15", title: "CO-CREATION LAB", desc: "企業、起業家、行政、金融機関等との対話を通じて、アイデアの実現可能性や連携方法を具体化します。" },
      { time: "17:15〜18:00", title: "SPARK PITCH", desc: "各チームが共創アイデアを発表し、ゲストや参加者からコメントを受けます。" },
      { time: "18:00〜18:30", title: "90-DAY COMMITMENT", desc: "発表で終わらせず、次回協議、担当窓口、検証内容など、イベント後90日間のアクションを整理します。" },
      { time: "18:30〜19:00", title: "クロージング・交流", desc: "参加者同士の交流、連携先との確認、集合写真撮影等を予定しています。" },
    ],
    timetableNote: "※プログラム、時間、登壇者および実施内容は、連携状況等に応じて変更する場合があります。",
    notes: [
      "学生チケットをご購入の方には、当日学生証をご提示いただく場合があります。",
      "チケット種別および販売枚数は変更する場合があります。",
    ],
    rules: [
      "宗教、政治活動、ネットワークビジネス、投資商品等への勧誘を目的とした参加はお断りします。",
      "営業、採用、サービス勧誘のみを目的とする行為はご遠慮ください。",
      "参加者に対する迷惑行為や、イベントの趣旨を損なう行為が確認された場合、主催者の判断で退場いただく場合があります。",
      "イベントの様子を写真・動画で撮影し、NEXUS LABおよび関係団体の広報媒体等で使用する場合があります。",
      "登壇者、参加企業、連携団体およびプログラムは変更になる場合があります。",
      "主催者の許可なく、参加者の個人情報や会話内容を外部へ公開することは禁止します。",
    ],
  },
  {
    id: "tokyo-2026",
    name: "NEXUS SPARK TOKYO",
    date: "2026-08-23",
    dateLabel: "2026.08.23 SUN",
    venue: "GROWTH文京飯田橋",
    summary:
      "学生や企業、スタートアップなどが集まり、立場を越えて交流する機会となりました。",
  },
];

// 開催日の終わり(JST 23:59:59)を過ぎたら「過去」扱い
export const isUpcoming = (e: SparkEvent, now = new Date()) =>
  new Date(`${e.date}T23:59:59+09:00`).getTime() >= now.getTime();
