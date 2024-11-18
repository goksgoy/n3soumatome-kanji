// Vocabulary List: You can add more words and meanings
const vocabulary = [
    { word: "有料", meaning: "ゆうりょう" },
    { word: "無料駐車場", meaning: "むりょうちゅうしゃじょう" },{ word: "満車", meaning: "まんしゃ" },{ word: "有料駐車場", meaning: "ゆうりょうちゅうしゃじょう" },{ word: "空車", meaning: "くうしゃ" },
    { word: "前向き駐車", meaning: "まえむきちゅうしゃ" },{ word: "無休", meaning: "むきゅう" },{ word: "無理", meaning: "むり" },{ word: "無料", meaning: "むりょう" },
    { word: "満員", meaning: "まんいん" },{ word: "不満", meaning: "ふまん" },{ word: "方向", meaning: "ほうこう" },{ word: "向かう", meaning: "むかう" },
    { word: "禁止", meaning: "きんし" },{ word: "関心", meaning: "かんしん" },{ word: "関する", meaning: "かんする" },{ word: "関係", meaning: "かんけい" },
    { word: "係", meaning: "かかり" },{ word: "無断", meaning: "むだん" },{ word: "断水", meaning: "だんすい" },{ word: "断る", meaning: "ことわる" },
    { word: "許可", meaning: "きょか" },{ word: "水道", meaning: "すいどう" },{ word: "代金", meaning: "だいきん" },{ word: "所", meaning: "ところ" },
    { word: "満足", meaning: "まんぞく" },{ word: "信号", meaning: "しんごう" },{ word: "押しボタンしき信号", meaning: "EZ" },{ word: "左右", meaning: "さゆう" },
    { word: "確認", meaning: "かくにん" },{ word: "横断歩道", meaning: "おうだんほどう" },{ word: "飛び出すな", meaning: "とびだすな" },{ word: "横", meaning: "よこ" },
    { word: "押し入れ", meaning: "おしいれ" },{ word: "押さえる", meaning: "おさえる" },{ word: "数式", meaning: "すうしき/Rumus" },{ word: "送信", meaning: "そうしん" },
    { word: "自信", meaning: "じしん" },{ word: "信用", meaning: "しんよう" },{ word: "〜号車", meaning: "〜ごうしゃ" },{ word: "正確", meaning: "せいかく" },
    { word: "確か", meaning: "たしか" },{ word: "確かめる", meaning: "たしかめる" },{ word: "認める", meaning: "みとめる" },{ word: "飛行場", meaning: "ひこうじょう" },
    { word: "飛ぶ", meaning: "とぶ" },{ word: "送る", meaning: "おくる" },{ word: "注意", meaning: "ちゅうい" },{ word: "非常口", meaning: "ひじょうぐち" },
    { word: "非常階段", meaning: "ひじょうかいだん" },{ word: "頭上", meaning: "ずじょう" },{ word: "足元", meaning: "あしもと" },{ word: "危険", meaning: "きけん" },
    { word: "捨てる", meaning: "すてる" },{ word: "非常", meaning: "ひじょう" },{ word: "非常に", meaning: "ひじょうに" },{ word: "日常", meaning: "にちじょう" },
    { word: "正常", meaning: "せいじょう" },{ word: "階段", meaning: "かいだん" },{ word: "箱", meaning: "はこ" },{ word: "危ない", meaning: "あぶない" },
    { word: "問題", meaning: "もんだい" },{ word: "運動", meaning: "うんどう" },{ word: "火事", meaning: "かじ" }
    
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
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").disabled = true;
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").disabled = false;
  }
  
