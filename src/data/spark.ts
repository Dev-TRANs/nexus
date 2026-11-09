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
  organizer?: string;
  category?: string; // 区分
  peatixUrl?: string;
  noteUrl?: string; // 開催への想い・開催レポート等
  announcement?: string; // 次回開催中のみ表示する告知文（過去になると summary を表示）
  summary: string;
  extra?: string; // 補足（GSE2026 など）
  recommended?: string[];
  recommendedNote?: string;
  timetable?: TimetableItem[];
  timetableNote?: string;
  notes?: string[]; // チケット等の注記
  rules?: string[]; // ご参加にあたって
}

export const events: SparkEvent[] = [
  {
    id: "kansai-2027",
    name: "NEXUS SPARK KANSAI 2027",
    date: "2027-02-14",
    dateLabel: "2027.02.14 SUN",
    time: "受付 12:00／開演 13:00／終了予定 19:00",
    venue: "GROWTH京都河原町",
    theme: "関西から日本全国へ！",
    audience: "高校生・大学生・若手社会人・企業・起業家・行政・金融機関など",
    organizer: "学生団体NEXUS LAB",
    category: "Global Startup EXPO 2026（GSE2026）サイドイベント",
    peatixUrl: "https://peatix.com/event/5264919",
    noteUrl: "https://note.com/nexusspark/n/nec08aeba3c9d",
    announcement:
      "次回は、2027年2月14日、GROWTH京都河原町で「NEXUS SPARK KANSAI 2027」の開催を予定しています。「関西から日本全国へ！」をテーマに、高校生・大学生・若手社会人・企業・起業家・行政・金融機関など、多様な参加者が集まる場をつくります。企業・行政による課題紹介や、関心のあるテーマについての対話、自由な交流・相談などを通じて、関西で生まれる出会いを、その先の挑戦につなげることを目指しています。登壇者やプログラム、参加条件などの最新情報は、決まり次第お知らせします。",
    summary:
      "企業・行政による課題紹介や、関心のあるテーマについての対話、自由な交流・相談などを通じて、関西で生まれる出会いを、その先の挑戦につなげることを目指しています。",
    extra:
      "本イベントは、Global Startup EXPO 2026（GSE2026）のサイドイベントとして正式に承認されています。GSE2026を通じて生まれる新たな接点や挑戦の機運を、関西における具体的な共創・実証・事業化へつなげます。",
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
      { time: "13:00〜13:50", title: "SPARK MEETUP｜受付・交流", desc: "テーマカードを使い、興味や関心を共有しながら交流します。" },
      { time: "13:50〜14:00", title: "着席案内・開演準備", desc: "会場や参加方法をご案内します。" },
      { time: "14:00〜14:10", title: "オープニング", desc: "企画の趣旨と当日の流れを共有します。" },
      { time: "14:10〜14:20", title: "協賛企業・関係者紹介", desc: "参画する企業・団体と、それぞれの役割を紹介します。" },
      { time: "14:20〜15:05", title: "OPEN CHALLENGE｜企業・地域からの問いの共有", desc: "現場の課題や、一緒に考えたいテーマを紹介します。" },
      { time: "15:05〜15:20", title: "テーマ選択・チームづくり", desc: "関心のあるテーマを選び、異なる立場の参加者とチームをつくります。" },
      { time: "15:20〜17:00", title: "SPARK DISCOVERY｜課題の深掘り・アイデア出し", desc: "経験や疑問を持ち寄り、課題の背景や解決の可能性を考えます。" },
      { time: "17:00〜17:20", title: "休憩・自由交流", minor: true },
      { time: "17:20〜18:40", title: "CO-CREATION LAB｜アイデアの可能性を考える", desc: "メンターとの対話を通じて視点を広げ、小さく試せることを考えます。" },
      { time: "18:40〜19:20", title: "SPARK CROSSOVER｜自由交流・相談", desc: "ほかの参加者と話す、企業に相談する、チームで考え続けるなど、過ごし方を選べます。" },
      { time: "19:20〜19:50", title: "NEXT SPARK｜振り返り・次の一歩の相談", desc: "一日の気づきを振り返り、希望者は今後の相談や取り組みについて話します。" },
      { time: "19:50〜20:00", title: "クロージング・集合写真", desc: "今後の案内と記念撮影を行います。" },
    ],
    timetableNote: "※プログラム・時間・内容は、調整状況により変更する場合があります。",
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
    noteUrl: "https://note.com/nexusspark/n/n565cd5aabe97",
    summary:
      "2026年8月23日には、GROWTH文京飯田橋で「NEXUS SPARK TOKYO」を開催しました。学生や企業、スタートアップなどが集まり、立場を越えて交流する機会となりました。当日の様子や開催を通じて得られた気づきは、公式noteの開催レポートで紹介しています。東京での経験を今後の企画・運営に活かし、各地域の特色や課題に応じたSPARKへとつなげていきます。",
  },
];

// 開催日の終わり(JST 23:59:59)を過ぎたら「過去」扱い
export const isUpcoming = (e: SparkEvent, now = new Date()) =>
  new Date(`${e.date}T23:59:59+09:00`).getTime() >= now.getTime();
