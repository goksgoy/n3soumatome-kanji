// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "有料", meaning: "ゆうりょう" },{ word: "無料駐車場", meaning: "むりょうちゅうしゃじょう" },{ word: "満車", meaning: "まんしゃ" },{ word: "有料駐車場", meaning: "ゆうりょうちゅうしゃじょう" },{ word: "空車", meaning: "くうしゃ" },{ word: "前向き駐車", meaning: "まえむきちゅうしゃ" },{ word: "無休", meaning: "むきゅう" },{ word: "無理", meaning: "むり" },{ word: "無料", meaning: "むりょう" },{ word: "満員", meaning: "まんいん" },{ word: "不満", meaning: "ふまん" },{ word: "方向", meaning: "ほうこう" },{ word: "向かう", meaning: "むかう" },{ word: "禁止", meaning: "きんし" },{ word: "関心", meaning: "かんしん" },{ word: "関する", meaning: "かんする" },{ word: "関係", meaning: "かんけい" },{ word: "係", meaning: "かかり" },{ word: "無断", meaning: "むだん" },{ word: "断水", meaning: "だんすい" },{ word: "断る", meaning: "ことわる" }, { word: "許可", meaning: "きょか" },{ word: "水道", meaning: "すいどう" },{ word: "代金", meaning: "だいきん" },{ word: "所", meaning: "ところ" }, { word: "満足", meaning: "まんぞく" },{ word: "信号", meaning: "しんごう" },{ word: "押しボタンしき信号", meaning: "EZ" },{ word: "左右", meaning: "さゆう" }, { word: "確認", meaning: "かくにん" },{ word: "横断歩道", meaning: "おうだんほどう" },{ word: "飛び出すな", meaning: "とびだすな" },{ word: "横", meaning: "よこ" }, { word: "押し入れ", meaning: "おしいれ" },{ word: "押さえる", meaning: "おさえる" },{ word: "数式", meaning: "すうしき/Rumus" },{ word: "送信", meaning: "そうしん" }, { word: "自信", meaning: "じしん" },{ word: "信用", meaning: "しんよう" },{ word: "〜号車", meaning: "〜ごうしゃ" },{ word: "正確", meaning: "せいかく" }, { word: "確か", meaning: "たしか" },{ word: "確かめる", meaning: "たしかめる" },{ word: "認める", meaning: "みとめる" },{ word: "飛行場", meaning: "ひこうじょう" }, { word: "飛ぶ", meaning: "とぶ" },{ word: "送る", meaning: "おくる" },{ word: "注意", meaning: "ちゅうい" },{ word: "非常口", meaning: "ひじょうぐち" },{ word: "非常階段", meaning: "ひじょうかいだん" },{ word: "頭上", meaning: "ずじょう" },{ word: "足元", meaning: "あしもと" },{ word: "危険", meaning: "きけん" }, { word: "捨てる", meaning: "すてる" },{ word: "非常", meaning: "ひじょう" },{ word: "非常に", meaning: "ひじょうに" },{ word: "日常", meaning: "にちじょう" }, { word: "正常", meaning: "せいじょう" },{ word: "階段", meaning: "かいだん" },{ word: "箱", meaning: "はこ" },{ word: "危ない", meaning: "あぶない" }, { word: "問題", meaning: "もんだい" },{ word: "運動", meaning: "うんどう" },{ word: "火事", meaning: "かじ" }, { word: "上り方面", meaning: "のぼりほうめん" },{ word: "下り方面", meaning: "くだりほうめん" },{ word: "線", meaning: "せん" },{ word: "普通", meaning: "ふつう" }, { word: "各駅", meaning: "かくえき" },{ word: "次発", meaning: "じはつ" },{ word: "快速", meaning: "かいそく" },{ word: "通過", meaning: "つうか" }, { word: "〜番線", meaning: "〜ばんせん" },{ word: "全面", meaning: "ぜんめん" },{ word: "画面", meaning: "がめん" },{ word: "各自", meaning: "かくじ" },{ word: "各国", meaning: "かっこく" },{ word: "目次", meaning: "もくじ" },{ word: "次回", meaning: "じかい" },{ word: "高速道路", meaning: "こうそくどうろ" }, { word: "速い", meaning: "はやい" },{ word: "速度", meaning: "そくど" },{ word: "過去", meaning: "かこ" },{ word: "過ぎる", meaning: "すぎる" }, { word: "地下鉄", meaning: "ちかてつ" },{ word: "鉄道", meaning: "てつどう" },{ word: "鉄", meaning: "てつ" },{ word: "先発", meaning: "せんぱつ" }, { word: "着く", meaning: "つく" },{ word: "料金", meaning: "りょうきん" }, { word: "指", meaning: "ゆび" },{ word: "指定", meaning: "してい" },{ word: "指定席", meaning: "していせき" },{ word: "指輪", meaning: "ゆびわ" }, { word: "定休日", meaning: "ていきゅうび" },{ word: "安定", meaning: "あんてい" },{ word: "不安定", meaning: "ふあんてい" },{ word: "席", meaning: "せき" }, { word: "出席", meaning: "しゅっせき" },{ word: "欠席", meaning: "けっせき" },{ word: "自由", meaning: "じゆう" },{ word: "理由", meaning: "りゆう" }, { word: "自由席", meaning: "じゆうせき" },{ word: "番号", meaning: "ばんごう" },{ word: "〜番線", meaning: "〜ばんせん" },{ word: "窓", meaning: "まど" }, { word: "窓口", meaning: "まどぐち" },{ word: "両側", meaning: "りょうがわ" },{ word: "窓側", meaning: "まどがわ" },{ word: "通路", meaning: "つうろ" },{ word: "線路", meaning: "せんろ" },{ word: "道路", meaning: "どうろう" },{ word: "外", meaning: "そと" },{ word: "座る", meaning: "すわる" }, { word: "全席", meaning: "ぜんせき" },{ word: "下り電車", meaning: "くだりでんしゃ" },{ word: "料金箱", meaning: "りょうきんばこ" },{ word: "優先座席", meaning: "ゆうせんざせき" }, { word: "停車", meaning: "ていしゃ" },{ word: "バス停", meaning: "バスてい" },{ word: "整理", meaning: "せいり" },{ word: "整理券", meaning: "せいりけん" }, { word: "現金", meaning: "げんきん" },{ word: "現れる", meaning: "あらわれる" },{ word: "表現", meaning: "ひょうげん" },{ word: "両親", meaning: "りょうしん" }, { word: "取り替える", meaning: "とりかえる" },{ word: "着替える", meaning: "きがえる" },{ word: "両替", meaning: "りょうがえ" },{ word: "優先席", meaning: "ゆうせんせき" }, { word: "優しい", meaning: "やさしい" },{ word: "俳優", meaning: "はいゆう" },{ word: "座席", meaning: "ざせき" },{ word: "正座", meaning: "せいざ" }, { word: "降車口", meaning: "こうしゃぐち" },{ word: "降りる", meaning: "おりる" },{ word: "以降", meaning: "いこう" },{ word: "降る", meaning: "ふる" }, { word: "年寄り", meaning: "としより" },{ word: "不自由", meaning: "ふじゆう" },{ word: "部屋", meaning: "へや" },{ word: "", meaning: "" }, { word: "駐車券", meaning: "ちゅうしゃけん" },{ word: "回数券", meaning: "かいすうけん" },{ word: "乗車券", meaning: "じょうしゃけん" },{ word: "選ぶ", meaning: "えらぶ" }, { word: "速度制限", meaning: "そくどせいげん" },{ word: "未定", meaning: "みてい" },{ word: "未来", meaning: "みらい" },{ word: "〜未満", meaning: "〜みまん" }, { word: "週末", meaning: "しゅうまつ" },{ word: "年末", meaning: "ねんまつ" },{ word: "若い", meaning: "わかい" },{ word: "毎晩", meaning: "まいばん" }, { word: "晩", meaning: "ばん" },{ word: "○○島", meaning: "○○とう" },{ word: "島", meaning: "しま" },{ word: "皿", meaning: "さら" },{ word: "灰皿", meaning: "はいざら" }, { word: "出血", meaning: "しゅっけつ" },{ word: "血", meaning: "ち" },{ word: "救助", meaning: "きゅうじょ" },{ word: "助ける", meaning: "たすける" }, { word: "鳥", meaning: "とり" }, { word: "走る", meaning: "はしる" },{ word: "復習", meaning: "ふくしゅう" },{ word: "時計", meaning: "とけい" },{ word: "黄色い", meaning: "きいろい" },{ word: "送料", meaning: "そうりょう" },

    // Minggu 2
    { word: "本日", meaning: "ほんじつ" },{ word: "準備中", meaning: "じゅんびちゅう" },{ word: "営業中", meaning: "えいぎょうちゅう" },{ word: "閉店", meaning: "へいてん" },
    { word: "営業案内", meaning: "えいぎょうあんない" },{ word: "開店", meaning: "かいてん" },{ word: "定休日", meaning: "ていきゅうび" },{ word: "ご予約承ります", meaning: "ごよやくうけたまわる" },
    { word: "準備", meaning: "じゅんび" },{ word: "備える", meaning: "そなえる" },{ word: "営業", meaning: "えいぎょう" },{ word: "開閉", meaning: "かいへい" },
    { word: "閉まる", meaning: "しまる" },{ word: "閉める", meaning: "しめる" },{ word: "案内", meaning: "あんない" },{ word: "案", meaning: "あん" },
    { word: "家内", meaning: "かない" },{ word: "国内", meaning: "こくない" },{ word: "以内", meaning: "いない" },{ word: "内側", meaning: "うちがわ" },
    { word: "予定", meaning: "よてい" },{ word: "予習", meaning: "よしゅう" },{ word: "予約", meaning: "よやく" },{ word: "決まる", meaning: "きまる" },
    { word: "概念", meaning: "がいねん" },{ word: "当店", meaning: "とうてん" },{ word: "全席禁煙", meaning: "ぜんせききんえん" },{ word: "禁煙", meaning: "きんえん" },
    { word: "煙", meaning: "けむり" },{ word: "本当", meaning: "ほんとう" },{ word: "当たる", meaning: "あたる" },{ word: "当○○", meaning: "とう○○" },
    { word: "当たり前", meaning: "あたりまえ" },{ word: "全部", meaning: "全席" },{ word: "安全", meaning: "あんぜん" },{ word: "客", meaning: "きゃく" },
    { word: "お客様", meaning: "おきゃくさま" },{ word: "様子", meaning: "ようす" },{ word: "理解", meaning: "りかい" },{ word: "解説", meaning: "かいせつ" },
    { word: "解答", meaning: "かいとう" },{ word: "分解", meaning: "ぶんかい" },{ word: "協力", meaning: "きょうりょく" },{ word: "願う", meaning: "ねがう" },{ word: "組み立てる", meaning: "くみたてる" },
    { word: "観光", meaning: "かんこう" },{ word: "観客", meaning: "かんきゃく" },{ word: "動物園", meaning: "どうぶつえん" },{ word: "空港", meaning: "くうこう" },
    { word: "港", meaning: "みなと" },{ word: "○○港", meaning: "○○こう" },{ word: "遊園地", meaning: "ゆうえんち" },{ word: "遊び", meaning: "遊び" },
    { word: "美術館", meaning: "びじゅつかん" },{ word: "美しい", meaning: "うつくしい" },{ word: "美人", meaning: "びじん" },{ word: "美術", meaning: "びじゅつ" },
    { word: "手術", meaning: "しゅじゅつ" },{ word: "技術", meaning: "ぎじゅつ" },{ word: "神経質", meaning: "しんけいしつ" },{ word: "神様", meaning: "かみさま" },
    { word: "お寺", meaning: "おてら" },{ word: "船", meaning: "ふね" },{ word: "借りる", meaning: "かりる" },{ word: "作品", meaning: "さくひん" },
    
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
