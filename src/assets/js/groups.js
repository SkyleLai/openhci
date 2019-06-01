const raw = `不顯示,僅顯示英文,,姓名,學校,系所,指導教授
總召,Program,3,李其蓉,國立清華大學,科技管理學院學士班,朱宏國
,,,韓舒容,國立政治大學,數位內容碩士學位學程,陳宜秀
,,,古宗儒,國立臺北教育大學,數位科技設計學系,俞齊山
網管,Web Service,3,朱彥睿,國立清華大學,資訊工程學系,朱宏國
,,,賴詰凱,國立清華大學,資訊工程學系,
,,,陳語芟,國立臺北教育大學,玩具與遊戲設計研究所,
策展,Curator,2,葉雅昀,國立政治大學,藝術與造型設計學系,
,,,蔡依庭,淡江大學,資訊與圖書館學研究所,
技術,Tech Studio,4,蕭伊涵,國立政治大學,資訊科學系,
,,,王鴻鈞,國立清華大學,資訊工程學系,朱宏國
,,,王科鈞,國立清華大學,資訊工程學系,朱宏國
,,,江明昱,國立臺灣大學,電信工程研究所,蔡志宏
視覺,Visual Design,4,徐郁雯,國立臺北科技大學,互動設計系研究所,陳圳卿
,,,王俐嵐,大同大學,工業設計學系,
,,,歐陽萱,淡江大學,資訊與圖書館學研究所,
,,,周艾萱,實踐大學,媒體傳達設計學系,
演講,Lecture,3,張雅貴,國立清華大學,資訊工程學系,朱宏國
,,,黃子倫,國立臺灣大學,工商管理學系,
,,,蕭煒霖,國立臺北科技大學,資訊工程學系,
總務,General Affair,1,劉紋銨,國立政治大學,數位內容碩士學位學程,蔡子傑
贊助,Sponsorship,3,呂紹靖,國立臺北大學,金融與合作經營學系,
,,,杜蒨妮,國立臺灣大學,生物產業傳播暨發展學系,
,,,黃睿宇,國立交通大學,工程與管理學系／資訊工程學系,
攝影,Film Crew,3,洪佩妤,國立政治大學,國際經營與貿易學系／數位內容與科技學程,
,,,唐逸安,國立政治大學,心理學系,
,,,黃竑錚,國立交通大學,電子工程學系,鄭文皇
人事,Human Resource,4,洪鵬凱,國立臺灣科技大學,設計學系,施皇旭/梁容輝
,,,馬世宇,國立臺灣科技大學,設計學系,施皇旭
,,,葉素芳,國立交通大學,工業工程與工程管理研究所,
,,,葉育瑄,國立臺灣大學,戲劇學系,
媒體,Publicity,4,李彤,國立交通大學,傳播與科技系研究所,
,,,莊景翔,國立政治大學,數位內容碩士學位學程,
,,,裘照玲,東吳大學,歷史系,
,,,黃嘉旭,國立臺北科技大學,互動設計研究所,
TA長,Chief TA,2,楊舒媛,國立臺灣大學,資訊工程學系,
TA長,,,鐘弘育,國立政治大學,歷史學系／數位內容與科技學程,
設計,TA Team / Design,8,陳習之,國立清華大學,工業工程與工程管理學系研究所,盧俊銘
設計,,,洪鵬凱,國立臺灣科技大學,設計學系,施皇旭/梁容輝
設計,,,劉佩姍,國立政治大學,數位內容碩士學位學程,陳宜秀
設計,,,馬翊,國立政治大學,數位內容碩士學位學程,陳聖智
設計,,,黃博揚,國立臺北科技大學,創新設計研究所,黃啟梧
設計,,,劉依璇,國立臺北科技大學,創新設計研究所,黃啟梧
設計,,,林靖洋,國立清華大學,科技管理學院學士班,曾元琦
設計,,,張如廷,國立清華大學,服務科學研究所,曾元琦
TA長,TA Team / Tech,8,翁健豪,國立政治大學,資訊管理研究所,郁方
技術,,,謝漢威,國立臺灣大學,資訊工程系研究所,陳炳宇
技術,,,盧慶原,國立臺灣大學,資訊管理研究所,陳炳宇
技術,,,李昆霖,國立臺北教育大學,玩具與遊戲設計研究所,范丙林/俞齊山
技術,,,盧俊言,國立交通大學,多媒體工程研究所,張永儒
技術,,,林聖亞,國立清華大學,科技管理學院學士班,黃稚存
技術,,,馬世宇,國立臺灣科技大學,設計學系,施皇旭
技術,,,楊信之,國立臺灣科技大學,電機工程研究所,`;

const team = [];
let lastGroupName = '';
let lastGroupIndex = -1;
raw
  .split('\n')
  .slice(1)
  .forEach(value => {
    const crew = value.split(',');
    if (crew[1] !== lastGroupName && crew[1] !== '') {
      lastGroupName = crew[1];
      lastGroupIndex++;
      team.push({
        groupName: crew[1],
        crews: [
          {
            name: crew[3],
            school: crew[4],
            dept: crew[5],
            teacher: crew[6]
          }
        ]
      });
    } else {
      team[lastGroupIndex].crews.push({
        name: crew[3],
        school: crew[4],
        dept: crew[5],
        teacher: crew[6]
      });
    }
  });

const groups = [];
team.forEach(({ groupName, crews }, groupIndex) => {
  let teamGroupCrews = '';
  const l = groupName.length * 21;
  crews.forEach(({ name, school, dept, teacher }, index) => {
    if (index % 4 === 0) {
      if (teamGroupCrews !== '') {
        groups.push(`
          <div class="team-group group-${groupIndex}">
            <div class="team-group-name" style="width: ${l}px; top: ${l}px;">
              <span>${groupName}</span>
            </div>
            <div class="team-group-crews">
              ${teamGroupCrews}
            </div>
          </div>
        `);
      }
      teamGroupCrews = `
        <div class="team-group-crew body">
          <span class="large-body">${name}</span><br />
          ${school}<br />
          ${dept}<br />
          ${teacher !== '' ? `指導教授 ${teacher}` : ''}
        </div>
      `;
    } else {
      teamGroupCrews += `
        <div class="team-group-crew body">
          <span class="large-body">${name}</span><br />
          ${school}<br />
          ${dept}<br />
          ${teacher !== '' ? `指導教授 ${teacher}` : ''}
        </div>
      `;
    }
  });
  groups.push(`
    <div class="team-group group-${groupIndex}">
      <div class="team-group-name" style="width: ${l}px; top: ${l}px;">
        <span>${groupName}</span>
      </div>
      <div class="team-group-crews">
        ${teamGroupCrews}
      </div>
    </div>
  `);
});

export default groups;
