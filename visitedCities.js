const visitedCities = [
    /*-------------------------------------------------------------------------------------------------------------------------------*/
    /*--------------------------------------------------------- A S I A -------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------------------------------------------*/
    
    /*-------------------------------------------------------- C H I N A ------------------------------------------------------------*/
    {
      name: 'Beijing',
      value: [116.383331, 39.916668, 0],
      visites: [
        { type: 'hotel', datedeb:'11/05/2025', datefin:'15/05/2025', coords:[116.4106, 39.90006] },
        { type: 'hotel', datedeb:'28/05/2025', datefin:'30/05/2025', coords:[116.38023, 39.86887] },
        /*The great wall*/
        { name:'Entering the Great Wall', coords:[116.5379, 40.41597], photo:'./IMG/2025/China/Beijing/IMG_20250512_130110.jpg', rotation: 25 },
        { name:'Arriving in cabble car', coords:[116.55903, 40.43878], photo:'./IMG/2025/China/Beijing/IMG_20250512_140556.jpg', rotation: 90 },
        { name:'Me on the Great Wall', coords:[116.55938, 40.44054], photo:'./IMG/2025/China/Beijing/IMG_20250512_141016.jpg', rotation: 312 },
        { name:'The long line of the Great Wall', coords:[116.56053, 40.43988], photo:'./IMG/2025/China/Beijing/IMG_20250512_141348.jpg', rotation: 157 },
        { name:'The long line of the Great Wall', coords:[116.56099, 40.43901], photo:'./IMG/2025/China/Beijing/IMG_20250512_141844.jpg', rotation: 157 },
        { name:'My fat body on the Great Wall', coords:[116.56119, 40.43869], photo:'./IMG/2025/China/Beijing/IMG_20250512_142025.jpg', rotation: 162 },
        { name:'The beauty of the Great Wall', coords:[116.56122, 40.43815], photo:'./IMG/2025/China/Beijing/IMG_20250512_143901.jpg', rotation: 346 },
        { name:'View of the Great Wall', coords:[116.55676, 40.44378], photo:'./IMG/2025/China/Beijing/IMG_20250512_150859.jpg', rotation: 327 },
        { name:'The grand staircase of Mutianyu', coords:[116.55515, 40.44703], photo:'./IMG/2025/China/Beijing/IMG_20250512_152823.jpg', rotation: 319 },
        { name:'Half way (my legs aaargh)', coords:[116.55456, 40.44756], photo:'./IMG/2025/China/Beijing/IMG_20250512_153650.jpg', rotation: 152 },
        { name:'Finally at the end of Mutianyu', coords:[116.55376, 40.44816], photo:'./IMG/2025/China/Beijing/IMG_20250512_154257.jpg', rotation: 148 },
        { name:'Going back to the cable car', coords:[116.55570, 40.44453], photo:'./IMG/2025/China/Beijing/IMG_20250512_161109.jpg', rotation: 131 },
        /*The forbidden city*/
        { name:'Entering the forbidden city', coords:[116.39102, 39.91145], photo:'./IMG/2025/China/Beijing/IMG_20250513_120311_1.jpg' },
        { name:'Finally inside', coords:[116.39098, 39.91287], photo:'./IMG/2025/China/Beijing/IMG_20250513_122113.jpg' },
        { name:'Amazed by the colours', coords:[116.39134, 39.91361], photo:'./IMG/2025/China/Beijing/IMG_20250513_122329.jpg' },
        { name:'Visiting', coords:[116.39164, 39.91379], photo:'./IMG/2025/China/Beijing/IMG_20250513_122412.jpg' },
        { name:'Amazed big the big space', coords:[116.39163, 39.91413], photo:'./IMG/2025/China/Beijing/IMG_20250513_122506.jpg' },
        { name:'Dying from hunger and heat (took a mango ice cream)', coords:[116.39081, 39.91793], photo:'./IMG/2025/China/Beijing/IMG_20250513_125342.jpg' },
        { name:'Beautiful alley', coords:[116.39158, 39.91863], photo:'./IMG/2025/China/Beijing/IMG_20250513_131056.jpg' },
        { name:'Long alley', coords:[116.39336, 39.91869], photo:'./IMG/2025/China/Beijing/IMG_20250513_141109.jpg' },
        { name:'The 9 dragon wall', coords:[116.39401, 39.91718], photo:'./IMG/2025/China/Beijing/IMG_20250513_142120.jpg' },
        { name:'Throne of the palace of tranquil longevity', coords:[116.39411, 39.91848], photo:'./IMG/2025/China/Beijing/IMG_20250513_142625.jpg' },
        { name:'One of the side doors', coords:[116.39452, 39.91867], photo:'./IMG/2025/China/Beijing/IMG_20250513_143152.jpg' },
        { name:'Cool building', coords:[116.39443, 39.91872], photo:'./IMG/2025/China/Beijing/IMG_20250513_143154.jpg' },
        { name:'Opera building', coords:[116.39441, 39.91940], photo:'./IMG/2025/China/Beijing/IMG_20250513_145311.jpg' },
        { name:'Edge of the forbidden city', coords:[116.39537, 39.92195], photo:'./IMG/2025/China/Beijing/IMG_20250513_152620.jpg' },
        /*The temple of heaven*/
        { name:'The temple of Heaven', coords:[116.40722, 39.88007], photo:'./IMG/2025/China/Beijing/IMG_20250513_190240_1.jpg' },
        { name:'Huge hail storm', coords:[116.41425, 39.88223], photo:'./IMG/2025/China/Beijing/IMG_20250513_204322.jpg' },
        /*Tiananmen square*/
        { name:'Tiananmen square !', coords:[116.39270, 39.90391], photo:'./IMG/2025/China/Beijing/IMG_20250514_110050.jpg' },
        { name:'Mister Mao Zedong', coords:[116.39181, 39.90521], photo:'./IMG/2025/China/Beijing/IMG_20250514_110234.jpg' },
        { name:'The great hall of the people', coords:[116.38999, 39.90355], photo:'./IMG/2025/China/Beijing/IMG_20250514_110756.jpg' },
        { name:'Mao Zedong memorial hall', coords:[116.39138, 39.90269], photo:'./IMG/2025/China/Beijing/IMG_20250514_111114.jpg' },
        { name:'National Museum of China', coords:[116.39292, 39.90355], photo:'./IMG/2025/China/Beijing/IMG_20250514_111347.jpg' },
        { name:'Beautiful building and gate', coords:[116.39161, 39.89702], photo:'./IMG/2025/China/Beijing/IMG_20250514_125603.jpg' },
        { name:'Me', coords:[116.39175, 39.89465], photo:'./IMG/2025/China/Beijing/IMG_20250514_132806.jpg' },
        { name:'Dumb me', coords:[116.39179, 39.89463], photo:'./IMG/2025/China/Beijing/IMG_20250514_132809.jpg' },
        { name:'Beautiful gate', coords:[116.39175, 39.89653], photo:'./IMG/2025/China/Beijing/IMG_20250514_134125.jpg' },
        /*The summer palace*/
        { name:'Beautiful gate', coords:[116.26806, 40.00049], photo:'./IMG/2025/China/Beijing/IMG_20250514_144546.jpg' },
        { name:'The summer palace', coords:[116.26821, 39.99958], photo:'./IMG/2025/China/Beijing/IMG_20250514_144828.jpg' },
        { name:'As always, beautiful decoration', coords:[116.26825, 39.99909], photo:'./IMG/2025/China/Beijing/IMG_20250514_145106.jpg' },
        { name:'Beautiful building', coords:[116.26823, 39.99885], photo:'./IMG/2025/China/Beijing/IMG_20250514_145541.jpg' },
        { name:'Building full of Buddha', coords:[116.26785, 39.99839], photo:'./IMG/2025/China/Beijing/IMG_20250514_145953.jpg' },
        { name:'Cute resting building', coords:[116.26986, 39.99826], photo:'./IMG/2025/China/Beijing/IMG_20250514_151334.jpg' },
        { name:'Beautiful entrance', coords:[116.26821, 39.99644], photo:'./IMG/2025/China/Beijing/IMG_20250514_152031.jpg' },
        { name:'Beautiful building', coords:[116.26802, 39.99705], photo:'./IMG/2025/China/Beijing/IMG_20250514_152412.jpg' },
        { name:'Beautiful old lady', coords:[116.26824, 39.99692], photo:'./IMG/2025/China/Beijing/IMG_20250514_153233.jpg' },
        { name:'At the top of the summer palace, Buddhism temple', coords:[116.26802, 39.99778], photo:'./IMG/2025/China/Beijing/IMG_20250514_154020.jpg' },
        { name:'Cool view of Beijing and the lake', coords:[116.26792, 39.99765], photo:'./IMG/2025/China/Beijing/IMG_20250514_155039.jpg' },
        { name:'Cool pagoda in the landscape', coords:[116.26776, 39.99762], photo:'./IMG/2025/China/Beijing/IMG_20250514_155106.jpg' },
        { name:'Married couple', coords:[116.26771, 39.99727], photo:'./IMG/2025/China/Beijing/IMG_20250514_155451_1.jpg' },
        { name:'Cool view from under', coords:[116.26775, 39.99702], photo:'./IMG/2025/China/Beijing/IMG_20250514_155556.jpg' },
        { name:'Cute boats on the lake', coords:[116.26765, 39.99630], photo:'./IMG/2025/China/Beijing/IMG_20250514_155803_1.jpg' },
        { name:'Cool walk path well decorated', coords:[116.26642, 39.99666], photo:'./IMG/2025/China/Beijing/IMG_20250514_160017.jpg' },
        { name:'The stone boat', coords:[116.26400, 39.99664], photo:'./IMG/2025/China/Beijing/IMG_20250514_160447.jpg' },
        { name:'Cute bridge', coords:[116.26354, 39.99927], photo:'./IMG/2025/China/Beijing/IMG_20250514_161619.jpg' },
        { name:'Cute walk path', coords:[116.26195, 39.99852], photo:'./IMG/2025/China/Beijing/IMG_20250514_162344.jpg' },
        { name:'Cool bridge', coords:[116.261467, 39.99546], photo:'./IMG/2025/China/Beijing/IMG_20250514_163717.jpg' },
        { name:'BIIIG bridge', coords:[116.26069, 39.99215], photo:'./IMG/2025/China/Beijing/IMG_20250514_164547.jpg' },
        { name:'The summer palace from the lake side', coords:[116.26145, 39.99156], photo:'./IMG/2025/China/Beijing/IMG_20250514_164651.jpg' },
        { name:'Another cool bridge', coords:[116.26329, 39.99009], photo:'./IMG/2025/China/Beijing/IMG_20250514_165126.jpg' },
        { name:'Another cool bridge', coords:[116.26559, 39.98781], photo:'./IMG/2025/China/Beijing/IMG_20250514_170056.jpg' },
        { name:'Cool building', coords:[116.26777, 39.98518], photo:'./IMG/2025/China/Beijing/IMG_20250514_170821.jpg' },
        { name:'Another enormous bridge', coords:[116.27407, 39.98017], photo:'./IMG/2025/China/Beijing/IMG_20250514_172519.jpg' },
        { name:'Another enormous bridge', coords:[116.27404, 39.98026], photo:'./IMG/2025/China/Beijing/IMG_20250514_172615.jpg' },
        { name:'Beautiful landscape', coords:[116.27437, 39.99400], photo:'./IMG/2025/China/Beijing/IMG_20250514_174405.jpg' },
        { name:'Beautiful landscape', coords:[116.27440, 39.99391], photo:'./IMG/2025/China/Beijing/IMG_20250514_174407.jpg' },
        { name:'End of the Beijing journey', coords:[116.31481, 39.89339], photo:'./IMG/2025/China/Beijing/IMG_20250515_093400.jpg' },
        /* last night in China*/
        { name:'Last photo of my whole trip', coords:[116.38023, 39.86887], photo:'./IMG/2025/China/Beijing/IMG_20250530_001727.jpg' },
      ]
    },
    {
      name: 'Xi\'an',
      value: [108.94243, 34.264533, 0],
      visites: [
        { type: 'hotel', datedeb:'15/05/2025', datefin:'19/05/2025', coords:[108.927897, 34.247519] },
        { name:'Arriving in Xi\'an', coords:[108.93470, 34.24256], photo:'./IMG/2025/China/Xian/IMG_20250515_145610.jpg' },
        { name:'View from my room', coords:[108.92789, 34.24751], photo:'./IMG/2025/China/Xian/IMG_20250515_201715.jpg' },
        { name:'The old rampart', coords:[108.92839, 34.25314], photo:'./IMG/2025/China/Xian/IMG_20250515_215025.jpg' },
        { name:'The bell tower', coords:[108.94197, 34.26035], photo:'./IMG/2025/China/Xian/IMG_20250515_221928.jpg' },
        /*Museum of terracotta warriors*/
        { name:'A very high neighborhood', coords:[108.99195, 34.25248], photo:'./IMG/2025/China/Xian/IMG_20250516_143603.jpg' },
        { name:'Musuem of terracotta', coords:[109.27895, 34.39095], photo:'./IMG/2025/China/Xian/IMG_20250516_151842.jpg' },
        { name:'A statue', coords:[109.27530, 34.38602], photo:'./IMG/2025/China/Xian/IMG_20250516_155047.jpg' },
        { name:'A statue', coords:[109.27522, 34.38610], photo:'./IMG/2025/China/Xian/IMG_20250516_155156.jpg' },
        { name:'Other statues', coords:[109.27534, 34.38622], photo:'./IMG/2025/China/Xian/IMG_20250516_155219.jpg' },
        { name:'A statue of an officer', coords:[109.27552, 34.38623], photo:'./IMG/2025/China/Xian/IMG_20250516_155253.jpg' },
        { name:'The famous terracotta warriors', coords:[109.27398, 34.38495], photo:'./IMG/2025/China/Xian/IMG_20250516_160317.jpg' },
        { name:'View from the side', coords:[109.27395, 34.38482], photo:'./IMG/2025/China/Xian/IMG_20250516_160509.jpg' },
        { name:'View from the side', coords:[109.27351, 34.38472], photo:'./IMG/2025/China/Xian/IMG_20250516_160852.jpg' },
        { name:'Restoration area', coords:[109.27246, 34.38475], photo:'./IMG/2025/China/Xian/IMG_20250516_161311.jpg' },
        { name:'What the excavations look like', coords:[109.27288, 34.38522], photo:'./IMG/2025/China/Xian/IMG_20250516_161934.jpg' },
        { name:'Poor warriors here since 2200 years', coords:[109.27297, 34.38522], photo:'./IMG/2025/China/Xian/IMG_20250516_161941.jpg' },
        { name:'A kneeling archer', coords:[109.27377, 34.38623], photo:'./IMG/2025/China/Xian/IMG_20250516_163227.jpg' },
        { name:'A high-ranking officer', coords:[109.27387, 34.38624], photo:'./IMG/2025/China/Xian/IMG_20250516_163347.jpg' },
        { name:'A middle-ranking officer', coords:[109.27393, 34.38620], photo:'./IMG/2025/China/Xian/IMG_20250516_163409.jpg' },
        { name:'A standing archer', coords:[109.27409, 34.38620], photo:'./IMG/2025/China/Xian/IMG_20250516_163507.jpg' },
        { name:'A cavalryman with his horse', coords:[109.27402, 34.386158], photo:'./IMG/2025/China/Xian/IMG_20250516_163518_1.jpg' },
        { name:'The second area that burned', coords:[109.27430, 34.38596], photo:'./IMG/2025/China/Xian/IMG_20250516_164030.jpg' },
        { name:'The third area', coords:[109.27226, 34.38543], photo:'./IMG/2025/China/Xian/IMG_20250516_171139.jpg' },
        /*Visiting the city*/
        { name:'Sandstorm coming...', coords:[108.92820, 34.24750], photo:'./IMG/2025/China/Xian/IMG_20250517_145854.jpg' },
        { name:'Rou jia mo (boiled meat burger from Xi\'an)', coords:[108.92050, 34.24581], photo:'./IMG/2025/China/Xian/IMG_20250517_203630.jpg' },
        { name:'Gods of the city\'s temple', coords:[108.93255, 34.26329], photo:'./IMG/2025/China/Xian/IMG_20250518_125153.jpg' },
        { name:'Old chinese alphabet', coords:[108.93268, 34.26282], photo:'./IMG/2025/China/Xian/IMG_20250518_125358.jpg' },
        { name:'One of the oldest mosque (705AD)', coords:[108.93160, 34.26380], photo:'./IMG/2025/China/Xian/IMG_20250518_130501.jpg' },
        { name:'A friend that showed me the whole neighborhood', coords:[108.934862, 34.26470], photo:'./IMG/2025/China/Xian/IMG_20250518_131254.jpg' },
        { name:'The muslim souk', coords:[108.93835, 34.26472], photo:'./IMG/2025/China/Xian/IMG_20250518_131603.jpg' },
        { name:'The great mosque', coords:[108.93598, 34.26329], photo:'./IMG/2025/China/Xian/IMG_20250518_141257.jpg' },
        { name:'An oooold map inside of the mosque', coords:[108.93676, 34.26323], photo:'./IMG/2025/China/Xian/IMG_20250518_142233.jpg' },
        { name:'The city wall', coords:[108.92680, 34.25262], photo:'./IMG/2025/China/Xian/IMG_20250518_214602.jpg' },
        { name:'The city wall', coords:[108.92673, 34.25264], photo:'./IMG/2025/China/Xian/IMG_20250518_214605.jpg' },
        { name:'The city wall', coords:[108.92600, 34.25264], photo:'./IMG/2025/China/Xian/IMG_20250518_214725.jpg' },
        { name:'The city wall', coords:[108.92587, 34.25265], photo:'./IMG/2025/China/Xian/IMG_20250518_214739.jpg' },
        { name:'The city wall', coords:[108.91970, 34.25283], photo:'./IMG/2025/China/Xian/IMG_20250518_215924.jpg' }
      ]
    },
    {
      name: 'Shanghai',
      value: [121.4737, 31.2304, 0],
      visites: [
        { type: 'hotel', datedeb:'19/05/2025', datefin:'24/05/2025', coords:[121.44882, 31.24892] },
        /*First visit of the bund*/
        { name:'The Bund', coords:[121.486234, 31.240105], photo:'./IMG/2025/China/Shanghai/IMG_20250519_221420.jpg' },
        { name:'The Bund', coords:[121.48624, 31.240071], photo:'./IMG/2025/China/Shanghai/IMG_20250519_221554.jpg' },
        { name:'the Bund with people', coords:[121.486022, 31.240349], photo:'./IMG/2025/China/Shanghai/IMG_20250519_221710.jpg' },
        { name:'The Bund', coords:[121.48623, 31.24055], photo:'./IMG/2025/China/Shanghai/IMG_20250519_224343.jpg' },
        { name:'The Bund', coords:[121.48711, 31.23689], photo:'./IMG/2025/China/Shanghai/IMG_20250519_225620.jpg' },
        { name:'The Bund', coords:[121.487199, 31.236728], photo:'./IMG/2025/China/Shanghai/IMG_20250519_225631.jpg' },
        { name:'Lego store', coords:[121.474630, 31.237533], photo:'./IMG/2025/China/Shanghai/IMG_20250519_235423.jpg' },
        /*Visit of the french concession*/
        { name:'A brick church', coords:[121.468823, 31.217345], photo:'./IMG/2025/China/Shanghai/IMG_20250520_134203.jpg' },
        { name:'French concession', coords:[121.462994, 31.210833], photo:'./IMG/2025/China/Shanghai/IMG_20250520_135906.jpg' },
        { name:'Tree forest art center', coords:[121.446222, 31.253172], photo:'./IMG/2025/China/Shanghai/IMG_20250520_190533.jpg' },
        { name:'Tree forest art center', coords:[121.4457, 31.253264], photo:'./IMG/2025/China/Shanghai/IMG_20250520_190612.jpg' },
        { name:'Cool view of Shanghai', coords:[121.44539, 31.245141], photo:'./IMG/2025/China/Shanghai/IMG_20250520_203940.jpg' },
        /*Visit of the Buddha temple*/
        { name:'3 big Buddhas', coords:[121.4403, 31.24340], photo:'./IMG/2025/China/Shanghai/IMG_20250522_115234.jpg' },
        { name:'The lying down Buddha', coords:[121.44083, 31.2433], photo:'./IMG/2025/China/Shanghai/IMG_20250522_115611.jpg' },
        { name:'The temple of Buddha', coords:[121.44058, 31.24343], photo:'./IMG/2025/China/Shanghai/IMG_20250522_115838.jpg' },
        { name:'The temple of Buddha', coords:[121.44030, 31.24319], photo:'./IMG/2025/China/Shanghai/IMG_20250522_121420.jpg' },
        { name:'The temple of Buddha', coords:[121.44062, 31.24282], photo:'./IMG/2025/China/Shanghai/IMG_20250522_123517.jpg' },
        { name:'The temple of Buddha', coords:[121.44041, 31.24334], photo:'./IMG/2025/China/Shanghai/IMG_20250522_125147.jpg' },
        /*Visit of the Bund*/
        { name:'The bund by day', coords:[121.48619, 31.24038], photo:'./IMG/2025/China/Shanghai/IMG_20250522_164733.jpg' },
        { name:'The oriental pearl', coords:[121.49299, 31.24002], photo:'./IMG/2025/China/Shanghai/IMG_20250522_170254.jpg' },
        { name:'The oriental pearl', coords:[121.49545, 31.24025], photo:'./IMG/2025/China/Shanghai/IMG_20250522_170749.jpg' },
        { name:'The oriental pearl', coords:[121.49629, 31.23967], photo:'./IMG/2025/China/Shanghai/IMG_20250522_170926.jpg' },
        { name:'The oriental pearl', coords:[121.49635, 31.23967], photo:'./IMG/2025/China/Shanghai/IMG_20250522_170933.jpg' },
        { name:'The big 3', coords:[121.49905, 31.23921], photo:'./IMG/2025/China/Shanghai/IMG_20250522_171629.jpg' },
        { name:'The big 3', coords:[121.50006, 31.23850], photo:'./IMG/2025/China/Shanghai/IMG_20250522_171852.jpg' },
        /*The Bund by night*/
        { name:'The view of the ground behind', coords:[121.50112, 31.23599], photo:'./IMG/2025/China/Shanghai/IMG_20250522_174301.jpg' },
        { name:'The view from the 119th floor (552m high)', coords:[121.50113, 31.23548], photo:'./IMG/2025/China/Shanghai/IMG_20250522_181211.jpg' },
        { name:'The view when lights turn on', coords:[121.50052, 31.235755], photo:'./IMG/2025/China/Shanghai/IMG_20250522_191006.jpg' },
        { name:'The view from behind at night', coords:[121.50145, 31.235975], photo:'./IMG/2025/China/Shanghai/IMG_20250522_193634.jpg' },
        { name:'The big 3 at night', coords:[121.49927, 31.23606], photo:'./IMG/2025/China/Shanghai/IMG_20250522_200940_1.jpg' },
        { name:'The big 3 at night', coords:[121.49914, 31.23708], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201158.jpg' },
        { name:'The big 3 at night', coords:[121.49907, 31.23758], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201412.jpg' },
        { name:'The area at night', coords:[121.49886, 31.23788], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201436.jpg' },
        { name:'The oriental pearl at night', coords:[121.49868, 31.23884], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201625.jpg' },
        { name:'The oriental pearl at night', coords:[121.49899, 31.23918], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201803.jpg' },
        { name:'The oriental pearl at night', coords:[121.49908, 31.23928], photo:'./IMG/2025/China/Shanghai/IMG_20250522_201817.jpg' },
        { name:'The big 3 at night', coords:[121.49960, 31.23947], photo:'./IMG/2025/China/Shanghai/IMG_20250522_202027.jpg' },
        { name:'The oriental pearl at night', coords:[121.49709, 31.24056], photo:'./IMG/2025/China/Shanghai/IMG_20250522_202607.jpg' },
        { name:'The Bund', coords:[121.48631, 31.24173], photo:'./IMG/2025/China/Shanghai/IMG_20250522_204941.jpg' },
        { name:'Mao Zedong', coords:[121.48594, 31.24100], photo:'./IMG/2025/China/Shanghai/IMG_20250522_205306.jpg' },
        { name:'The people\'s brazer', coords:[121.48669, 31.24413], photo:'./IMG/2025/China/Shanghai/IMG_20250522_205940.jpg' },
        { name:'The bund with the brazer', coords:[121.48649, 31.24416], photo:'./IMG/2025/China/Shanghai/IMG_20250522_210154.jpg' },
        /*Date with Xinrui*/
        { name:'Start of my date with Xinrui', coords:[121.43297, 31.26360], photo:'./IMG/2025/China/Shanghai/IMG_20250523_000731.jpg' }
      ]
    },
    {
      name: 'Hangzhou',
      value: [120.17478, 30.27338, 0],
      visites: [
        /*tourist street*/
        { name:'Hefang street', coords:[120.16237, 30.24233], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_102732.jpg' },
        { name:'Hefang street', coords:[120.16279, 30.24234], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_102831.jpg' },
        { name:'Marco Polo\'s book in Chinese medicine museum', coords:[120.16425, 30.24220], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_105933.jpg' },
        /*Lake*/
        { name:'Famous bridge', coords:[120.14823, 30.26160], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_154618.jpg' },
        { name:'Beautiful walk', coords:[120.14517, 30.25887], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_155357.jpg' },
        { name:'Beautiful gate', coords:[120.137691, 30.25252], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_162017.jpg' },
        { name:'A little rest with duckling', coords:[120.13531, 30.25394], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_175710_1.jpg' },
        { name:'City god pavillon above the lake', coords:[120.14120, 30.25955], photo:'./IMG/2025/China/Hangzhou/IMG_20250521_183158.jpg' }
      ]
    },
    {
      name: 'Guilin',
      value: [110.28782, 25.27805, 0],
      visites: [
        { type: 'hotel', datedeb:'24/05/2025', datefin:'25/05/2025', coords:[110.29357, 25.27618] },
        { type: 'hotel', datedeb:'27/05/2025', datefin:'28/05/2025', coords:[110.28903, 25.28033] },
        /*The pagodas*/
        { name:'The pagodas of moon and sun', coords:[110.29236, 25.27466], photo:'./IMG/2025/China/Guilin/IMG_20250524_203940.jpg' },
        { name:'The pagodas of moon and sun', coords:[110.29228, 25.27462], photo:'./IMG/2025/China/Guilin/IMG_20250524_203944.jpg' },
        { name:'The pagodas of moon and sun', coords:[110.291732, 25.27381], photo:'./IMG/2025/China/Guilin/IMG_20250524_204341.jpg' },
        { name:'The pagodas of moon and sun', coords:[110.29164, 25.27368], photo:'./IMG/2025/China/Guilin/IMG_20250524_204457.jpg' },
        /*River trip*/
        { name:'In the boat for the river trip to Yangshuo', coords:[110.42834, 25.14959], photo:'./IMG/2025/China/Guilin/IMG_20250525_113425.jpg' },
        { name:'The famous view of the 20RMB banknote', coords:[110.47529, 24.94933], photo:'./IMG/2025/China/Guilin/IMG_20250525_134720.jpg' },
        { name:'Cool view', coords:[110.48172, 24.94812], photo:'./IMG/2025/China/Guilin/IMG_20250525_135216.jpg' },
        { name:'Cool view', coords:[110.48752, 24.93775], photo:'./IMG/2025/China/Guilin/IMG_20250525_135454.jpg' },
        /*Visiting*/
        { name:'A little street', coords:[110.28956, 25.28063], photo:'./IMG/2025/China/Guilin/IMG_20250527_124224.jpg' },
        /*Park*/
        { name:'Dinosaur !', coords:[110.30750, 25.27165], photo:'./IMG/2025/China/Guilin/IMG_20250527_142433.jpg' },
        { name:'The 7 star park', coords:[110.30861, 25.27236], photo:'./IMG/2025/China/Guilin/IMG_20250527_142922.jpg' },
        { name:'Above the 7 star park viewing Guilin', coords:[110.30763, 25.27753], photo:'./IMG/2025/China/Guilin/IMG_20250527_151706.jpg' },
        { name:'Me going at the top', coords:[110.30750, 25.27736], photo:'./IMG/2025/China/Guilin/IMG_20250527_151931_1.jpg' },
        { name:'Free monkey in the park', coords:[110.30637, 25.27631], photo:'./IMG/2025/China/Guilin/IMG_20250527_152944.jpg' },
        { name:'Free red ass monkey', coords:[110.30529, 25.27427], photo:'./IMG/2025/China/Guilin/IMG_20250527_153507.jpg' },
        /*ZOO*/
        { name:'Tiger in the zoo', coords:[110.31151, 25.27326], photo:'./IMG/2025/China/Guilin/IMG_20250527_155156.jpg' },
        { name:'hippopotamus in the zoo', coords:[110.31153, 25.27311], photo:'./IMG/2025/China/Guilin/IMG_20250527_160108.jpg' },
        { name:'Flamingo', coords:[110.31182, 25.27274], photo:'./IMG/2025/China/Guilin/IMG_20250527_160408.jpg' },
        { name:'Japanese crane', coords:[110.31191, 25.27270], photo:'./IMG/2025/China/Guilin/IMG_20250527_160419_1.jpg' },
        { name:'Wolves', coords:[110.31245, 25.27215], photo:'./IMG/2025/China/Guilin/IMG_20250527_160609.jpg' },
        /*Park*/
        { name:'Ladies dressed', coords:[110.30856, 25.27219], photo:'./IMG/2025/China/Guilin/IMG_20250527_163909.jpg' },
        { name:'Longyin cave', coords:[110.30147, 25.27459], photo:'./IMG/2025/China/Guilin/IMG_20250527_170519.jpg' },
        { name:'Longyin cave', coords:[110.30176, 25.27465], photo:'./IMG/2025/China/Guilin/IMG_20250527_170628.jpg' }
      ]
    },
    {
      name: 'Yangshuo',
      value: [110.486715, 24.7791743, 0],
      visites: [
        { type: 'hotel', datedeb:'25/05/2025', datefin:'27/05/2025', coords:[110.49081, 24.77598] },
        /*Visiting the city*/
        { name:'Arriving by boat at Yangshuo', coords:[110.49659, 24.78710], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_145400.jpg' },
        { name:'The view outside of my hotel', coords:[110.48936, 24.77612], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_175531.jpg' },
        { name:'A little walk in a park', coords:[110.48351, 24.77961], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_181556.jpg' },
        { name:'A little walk in a park', coords:[110.48428, 24.77971], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_181810.jpg' },
        { name:'A cute bridge', coords:[110.48458, 24.78024], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_182453.jpg' },
        { name:'A cute little park', coords:[110.48617, 24.78034], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_184237.jpg' },
        { name:'A little street', coords:[110.49183, 24.77960], photo:'./IMG/2025/China/Yangshuo/IMG_20250525_190324.jpg' },
        /*Going to the little hills*/
        { name:'View of the dragon path', coords:[110.45666, 24.69113], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_123532.jpg' },
        { name:'View of the bridge', coords:[110.45639, 24.69131], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_123542.jpg' },
        { name:'View of the dragon path', coords:[110.45633, 24.69120], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_123804.jpg' },
        { name:'The bridge', coords:[110.45622, 24.69130], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_124020.jpg' },
        { name:'The bridge full of wish from people', coords:[110.45611, 24.69139], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_124050.jpg' },
        { name:'View from above', coords:[110.45458, 24.69437], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_130243.jpg' },
        { name:'Me and the hills', coords:[110.45467, 24.69440], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_130328.jpg' },
        { name:'View', coords:[110.45472, 24.69425], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_130457.jpg' },
        { name:'Rabbit and pumpkin on the dragon path', coords:[110.45752, 24.69332], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_132737.jpg' },
        { name:'Glass path on a cliff', coords:[110.45862, 24.69208], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_133616.jpg' },
        { name:'Cable car leaving the hills', coords:[110.45896, 24.68943], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_135945.jpg' },
        /*Visiting the parks*/
        { name:'A park', coords:[110.48247, 24.73450], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_162002.jpg' },
        { name:'Sacred tree', coords:[110.48052, 24.73471], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_165025.jpg' },
        { name:'Cool view', coords:[110.48557, 24.73719], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_170650.jpg' },
        { name:'Cool view from the bridge', coords:[110.48621, 24.73716], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_171317.jpg' },
        { name:'Me on the bridge', coords:[110.48627, 24.73727], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_171349.jpg' },
        { name:'field of water lilies', coords:[110.49065, 24.74373], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_173403.jpg' },
        { name:'Durian seller', coords:[110.48767, 24.75080], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_174721.jpg' },
        { name:'Cool view', coords:[110.48708, 24.75336], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_175136.jpg' },
        { name:'Big pink statue', coords:[110.48920, 24.7668], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_181355.jpg' },
        /*Impression Liu Sanjie*/
        { name:'Enter of the Impression Liu Sanjie', coords:[110.50185, 24.76819], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_195417.jpg' },
        { name:'Start of the show', coords:[110.50577, 24.77105], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_200533.jpg' },
        { name:'Middle of the show', coords:[110.50581, 24.77104], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_202232.jpg' },
        { name:'Going back from the show', coords:[110.49783, 24.76995], photo:'./IMG/2025/China/Yangshuo/IMG_20250526_212603.jpg' },
        { name:'The bridge and the landscape', coords:[110.45614, 24.69133], photo:'./IMG/2025/China/Yangshuo/PANO_20250526_124223.jpg' }
      ]
    },
    {
      name: 'Tianjin',
      value: [117.18850, 39.13867, 0],
      visites: [
        /*visit of the city*/
        { name:'Century clock', coords:[117.20000, 39.13255], photo:'./IMG/2025/China/Tianjin/IMG_20250529_100703.jpg' },
        { name:'Century clock', coords:[117.20001, 39.13251], photo:'./IMG/2025/China/Tianjin/IMG_20250529_100714.jpg' },
        { name:'La Défense from China', coords:[117.19594, 39.13045], photo:'./IMG/2025/China/Tianjin/IMG_20250529_102057.jpg' },
        /*Antiquity streets*/
        { name:'Antiquity street', coords:[117.19043, 39.12548], photo:'./IMG/2025/China/Tianjin/IMG_20250529_105243.jpg' },
        { name:'I think i bought it in this street maybe at 10/11am (took this photo in my hotel at night)', coords:[117.19054, 39.12562], photo:'./IMG/2025/China/Tianjin/IMG_20250529_225805.jpg' },
        /*Visiting*/
        { name:'Beautiful bridge', coords:[117.18796, 39.13232], photo:'./IMG/2025/China/Tianjin/IMG_20250529_120417.jpg' },
        { name:'Beautiful bridge', coords:[117.18775, 39.13266], photo:'./IMG/2025/China/Tianjin/IMG_20250529_120546.jpg' },
        { name:'Beautiful bridge', coords:[117.18743, 39.13331], photo:'./IMG/2025/China/Tianjin/IMG_20250529_120712.jpg' },
        { name:'Italian style buildings', coords:[117.18722, 39.13622], photo:'./IMG/2025/China/Tianjin/IMG_20250529_121129.jpg' },
        { name:'Soviet tank', coords:[117.18681, 39.13988], photo:'./IMG/2025/China/Tianjin/IMG_20250529_121939.jpg' },
        { name:'Church', coords:[117.18629, 39.14004], photo:'./IMG/2025/China/Tianjin/IMG_20250529_122049.jpg' },
        { name:'Beautiful street with gate', coords:[117.18659, 39.140383], photo:'./IMG/2025/China/Tianjin/IMG_20250529_123102.jpg' },
        { name:'Beautiful buildings', coords:[117.18660, 39.14091], photo:'./IMG/2025/China/Tianjin/IMG_20250529_123140.jpg' },
        { name:'Beautiful street', coords:[117.18661, 39.14133], photo:'./IMG/2025/China/Tianjin/IMG_20250529_123309.jpg' },
        { name:'Beautiful street', coords:[117.18644, 39.14273], photo:'./IMG/2025/China/Tianjin/IMG_20250529_123715.jpg' },
        { name:'Tianjin\'s dock and the ferris wheel', coords:[117.18455, 39.14841], photo:'./IMG/2025/China/Tianjin/IMG_20250529_142105.jpg' },
        { name:'Buddhism temple', coords:[117.18300, 39.15381], photo:'./IMG/2025/China/Tianjin/IMG_20250529_144733.jpg' },
        /*Italian concession*/
        { name:'Cool church Sainte Victoire - 1869', coords:[117.18851, 39.14635], photo:'./IMG/2025/China/Tianjin/IMG_20250529_150828.jpg' },
        { name:'Statue of Dante', coords:[117.19398, 39.13291], photo:'./IMG/2025/China/Tianjin/IMG_20250529_164259.jpg' },
        { name:'Cool tower', coords:[117.19019, 39.13360], photo:'./IMG/2025/China/Tianjin/IMG_20250529_165031.jpg' },
        { name:'Stylish bridge', coords:[117.18958, 39.13238], photo:'./IMG/2025/China/Tianjin/IMG_20250529_165754.jpg' },
        { name:'Marco Polo square', coords:[117.19231, 39.13322], photo:'./IMG/2025/China/Tianjin/IMG_20250529_170730.jpg' },
        { name:'The bible of maps', coords:[117.19287, 39.13402], photo:'./IMG/2025/China/Tianjin/IMG_20250529_172047.jpg' },
        { name:'The interior of the library', coords:[117.19278, 39.13405], photo:'./IMG/2025/China/Tianjin/IMG_20250529_172230.jpg' },
        { name:'The exterior of the library', coords:[117.19265, 39.13408], photo:'./IMG/2025/China/Tianjin/IMG_20250529_172251.jpg' },
        { name:'Apéro time with my bible', coords:[117.1912, 39.13370], photo:'./IMG/2025/China/Tianjin/IMG_20250529_180516.jpg' },
        /*Going back to the train station*/
        { name:'Chinese la Défense by night', coords:[117.19112, 39.13077], photo:'./IMG/2025/China/Tianjin/IMG_20250529_195447.jpg' },
        { name:'Financial center tower', coords:[117.19313, 39.12997], photo:'./IMG/2025/China/Tianjin/IMG_20250529_195706.jpg' },
        { name:'Tianjin dock before leaving', coords:[117.19884, 39.13174], photo:'./IMG/2025/China/Tianjin/IMG_20250529_201045.jpg' }
      ]
    },
    /*-------------------------------------------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------------------------------------------*/





    /*----------------------------------------------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------- E U R O P E -------------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------------------------*/

    /*------------------------------------------------------- G E R M A N Y ------------------------------------------------------------*/
    {
      name: 'Munich',
      value: [11.57251, 48.13922, 0],
      visites: [
        { type: 'hotel', datedeb:'11/07/2025', datefin:'13/07/2025', coords:[11.622536, 48.136962] },
        { name:'Marienplatz', coords:[11.57566, 48.13707], photo:'./IMG/2025/Central Europe/Munich/IMG_20250712_145518.jpg' },
        { name:'Cathedral', coords:[11.57251, 48.13863], photo:'./IMG/2025/Central Europe/Munich/IMG_20250712_173138.jpg' },
        { name:'Beer at the englischergarten', coords:[11.59248, 48.15229], photo:'./IMG/2025/Central Europe/Munich/IMG_20250712_193124.jpg' },
        { name:'Leaving the garten', coords:[11.596034, 48.1503655], photo:'./IMG/2025/Central Europe/Munich/IMG_20250712_203324.jpg' },
        { name:'Waiting for her laundry', coords:[11.60667, 48.12429], photo:'./IMG/2025/Central Europe/Munich/IMG_20250712_221519.jpg' },
        { name:'Last meal before the end', coords:[11.56099, 48.13865], photo:'./IMG/2025/Central Europe/Munich/IMG_20250727_140041.jpg' }
      ]
    },
    {
      name: 'Regensburg',
      value: [12.09421, 49.02009, 0],
      visites: [
        { type: 'hotel', datedeb:'24/07/2025', datefin:'25/07/2025', coords:[12.107303, 49.014029] },
        { name:'An old tower', coords:[12.10843, 49.01792], photo:'./IMG/2025/Central Europe/Regensburg/IMG_20250725_121358.jpg' },
        { name:'Café Lorraine', coords:[12.10154, 49.01750], photo:'./IMG/2025/Central Europe/Regensburg/IMG_20250725_125458.jpg' },
        { name:'Us on the old bridge', coords:[12.09711, 49.02176], photo:'./IMG/2025/Central Europe/Regensburg/IMG_20250725_151922.jpg' },
        { name:'View of Regensburg', coords:[12.10189, 49.02126], photo:'./IMG/2025/Central Europe/Regensburg/IMG_20250725_165907.jpg' }
      ]
    },
    {
      name: 'Ulm',
      value: [9.99271, 48.39848, 0],
      visites: [
        { type: 'hotel', datedeb:'25/07/2025', datefin:'27/07/2025', coords:[9.983286, 48.39558] },
        { name:'No room...', coords:[9.983286, 48.39558], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_031056.jpg' },
        { name:'The tallest cathedral in the world', coords:[9.990807, 48.39833], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_143246.jpg' },
        { name:'The townhall', coords:[9.993648, 48.39700], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_160509.jpg' },
        { name:'The most leaning hotel in the world', coords:[9.991303, 48.39557], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_162846.jpg' },
        { name:'Cute bridge, river and us', coords:[9.9909279, 48.395416], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_163153.jpg' },
        { name:'Einstein fountain', coords:[10.001146, 48.400465], photo:'./IMG/2025/Central Europe/Ulm/IMG_20250726_180211.jpg' }
      ]
    },
    {
      name: 'Marquartstein',
      value: [12.46238, 47.75929, 0],
      visites: [
        { name:'On a walk', coords:[12.46436, 47.757624], photo:'./IMG/2025/Central Europe/Marquartstein/IMG_20250713_135813.jpg' },
        { name:'Cute girl and a bin', coords:[12.465336, 47.75557], photo:'./IMG/2025/Central Europe/Marquartstein/IMG_20250713_140715.jpg' },
        { name:'The lion girl', coords:[12.46704, 47.75209], photo:'./IMG/2025/Central Europe/Marquartstein/IMG_20250713_141521.jpg' },
        { name:'Barbie was lost', coords:[12.46681, 47.751229], photo:'./IMG/2025/Central Europe/Marquartstein/IMG_20250713_141835.jpg' },
        { name:'Fuck the rain', coords:[12.463480, 47.759179], photo:'./IMG/2025/Central Europe/Marquartstein/IMG_20250713_150552.jpg' }
      ]
    },
    
    /*------------------------------------------------------ A U S T R I A -------------------------------------------------------------*/
    {
      name: 'Salzburg',
      value: [13.04159, 47.80523, 0],
      visites: [
        { type: 'hotel', datedeb:'13/07/2025', datefin:'15/07/2025', coords:[13.037606, 47.810420] },
        { name:'Mozart Diner Concert', coords:[13.0441398, 47.7970268], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250713_185800.jpg' },
        { name:'Mozart Birth Place', coords:[13.043580, 47.79991], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250714_131540.jpg' },
        { name:'Roof of the Castle', coords:[13.046522, 47.794979], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250714_165226.jpg' },
        { name:'First evening apéro ', coords:[13.052116, 47.796713], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250714_214406.jpg' },
        { name:'Beautiful night sky view', coords:[13.037349, 47.804998], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250714_012446.jpg' },
        { name:'My street', coords:[13.03803, 47.810573], photo:'./IMG/2025/Central Europe/Salzburg/IMG_20250714_115800.jpg' }
      ]
    },
    
    /*------------------------------------------------------ H U N G A R Y -------------------------------------------------------------*/
    {
      name: 'Budapest',
      value: [19.05196, 47.49394, 0],
      visites: [
        { type: 'hotel', datedeb:'18/07/2025', datefin:'21/07/2025', coords:[19.0628424, 47.4977553] },
        { name:'Heroes square', coords:[19.077351, 47.514584], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250718_191011.jpg' },
        { name:'The cutest', coords:[19.080105, 47.516005], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250718_193447.jpg' },
        { name:'Us and the castle of Vajdahunyad', coords:[19.0816144, 47.5159559], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250718_194127.jpg' },
        { name:'Ruin bar', coords:[19.06287432, 47.49678406], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_003008.jpg' },
        { name:'Snow White and the bird', coords:[19.06256, 47.497044], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_121752.jpg' },
        { name:'Going to the Museum in the castle of Buda', coords:[19.041502, 47.495178], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_133222.jpg' },
        { name:'Resting time in the museum', coords:[19.039736, 47.495084], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_154009.jpg' },
        { name:'Photo of us', coords:[19.041387, 47.495095], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_171040.jpg' },
        { name:'Fishermen\'s church', coords:[19.033740, 47.501323], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_183722.jpg' },
        { name:'My beauty and the parliament', coords:[19.03952892, 47.506152106], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_200219.jpg' },
        { name:'Parliament of Budapest', coords:[19.04688, 47.50800], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250720_192616.jpg' },
        { name:'On the way to the thermal baths', coords:[19.06856, 47.50860], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250721_111258_1.jpg' },
        { name:'Entering the Ruin bar', coords:[19.06335, 47.497006], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250718_205500.jpg' },
        { name:'In the Ruin bar', coords:[19.06299, 47.49687], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250719_002000.jpg' },
        { name:'Us and the castel of Pest', coords:[19.08303, 47.51652], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250718_195500.jpg' },
        { name:'Luggage locker', coords:[19.08311, 47.50028], photo:'./IMG/2025/Central Europe/Budapest/IMG_20250721_165000.jpg' },
      ]
    },
    
    /*-------------------------------------------------- C Z E C H   R E P U B L I C --------------------------------------------------*/
    {
      name: 'Prague',
      value: [14.42037, 50.08427, 0],
      visites: [
        { type: 'hotel', datedeb:'21/07/2025', datefin:'24/07/2025', coords:[14.454204, 50.094476] },
        { name:'Powder tower', coords:[14.42802, 50.08691], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_140357.jpg' },
        { name:'Astronomical clock', coords:[14.42067, 50.08700], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_144513.jpg' },
        { name:'Astronomical clock\'s square', coords:[14.42125, 50.08711], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_144953.jpg' },
        { name:'Forced to eat', coords:[14.41971, 50.08665], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_154732.jpg' },
        { name:'Old tavern', coords:[14.40156, 50.08898], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_204124.jpg' },
        { name:'Church of the infant Jesus', coords:[14.40365, 50.08572], photo:'./IMG/2025/Central Europe/Prague/IMG_20250723_165037.jpg' },
        { name:'The Lennon wall', coords:[14.406930, 50.086249], photo:'./IMG/2025/Central Europe/Prague/IMG_20250723_180908.jpg' },
        { name:'London underground bar', coords:[14.41934, 50.08147], photo:'./IMG/2025/Central Europe/Prague/IMG_20250723_205251.jpg' },
        { name:'Distorting mirror', coords:[14.42559, 50.08526], photo:'./IMG/2025/Central Europe/Prague/IMG_20250722_135000.jpg' },
        { name:'Frog guy with a frog on the Lennon wall', coords:[14.406810, 50.086249], photo:'./IMG/2025/Central Europe/Prague/IMG_20250723_181500.jpg' },
        { name:'Delicious meal in a pub', coords:[14.40824, 50.08629], photo:'./IMG/2025/Central Europe/Prague/IMG_20250723_185200.jpg' }
      ]
    }
  ];
    /*----------------------------------------------------------------------------------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------------------------*/
