
// ═══════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════

// Internal vibe definitions — used only for film card tags and scoring
const VIBES_MAP = {
  'dark':         { label: 'Dark',         emoji: '🌑', tagBg: 'rgba(100,80,160,0.25)',  tagColor: '#c4b5fd', bg: 'linear-gradient(150deg,#0d0d1e,#1a1040)' },
  'romantic':     { label: 'Romantic',     emoji: '💕', tagBg: 'rgba(200,50,80,0.25)',   tagColor: '#fda4af', bg: 'linear-gradient(150deg,#4a0820,#9b1a42)' },
  'comedy':       { label: 'Comedy',       emoji: '😂', tagBg: 'rgba(200,130,0,0.25)',   tagColor: '#fcd34d', bg: 'linear-gradient(150deg,#3d1f00,#a15a00)' },
  'action':       { label: 'Action',       emoji: '⚡', tagBg: 'rgba(200,30,30,0.25)',   tagColor: '#fca5a5', bg: 'linear-gradient(150deg,#3b0000,#9c1515)' },
  'mystery':      { label: 'Mystery',      emoji: '🔮', tagBg: 'rgba(140,50,200,0.25)',  tagColor: '#d8b4fe', bg: 'linear-gradient(150deg,#1a0538,#4c1070)' },
  'feel-good':    { label: 'Feel-Good',    emoji: '☀️', tagBg: 'rgba(20,160,70,0.25)',   tagColor: '#86efac', bg: 'linear-gradient(150deg,#042010,#0d5c2a)' },
  'mind-bending': { label: 'Mind-Bending', emoji: '🌀', tagBg: 'rgba(0,130,200,0.25)',   tagColor: '#7dd3fc', bg: 'linear-gradient(150deg,#00111e,#024a72)' },
  'horror':       { label: 'Horror',       emoji: '👁️', tagBg: 'rgba(180,0,0,0.3)',      tagColor: '#fca5a5', bg: 'linear-gradient(150deg,#100000,#550000)' },
  'sci-fi':       { label: 'Sci-Fi',       emoji: '🚀', tagBg: 'rgba(0,160,200,0.2)',    tagColor: '#a5f3fc', bg: 'linear-gradient(150deg,#000818,#012d55)' },
  'adventure':    { label: 'Adventure',    emoji: '🧭', tagBg: 'rgba(200,80,0,0.25)',    tagColor: '#fdba74', bg: 'linear-gradient(150deg,#1a0800,#7c2d00)' },
  'emotional':    { label: 'Emotional',    emoji: '💔', tagBg: 'rgba(80,90,200,0.25)',   tagColor: '#a5b4fc', bg: 'linear-gradient(150deg,#0d0d28,#2d3480)' },
  'nostalgic':    { label: 'Nostalgic',    emoji: '📼', tagBg: 'rgba(180,90,0,0.25)',    tagColor: '#fdba74', bg: 'linear-gradient(150deg,#1a0c00,#7a3500)' },
};

// Abstract icons — each maps to underlying vibes for scoring
const ICONS = [
  { id:'spaceship',    label:'Spaceship',       emoji:'🚀', color:'#67e8f9', vibes:['sci-fi','adventure'],               bg:'linear-gradient(150deg,#000818,#012d55)' },
  { id:'ramen',        label:'Ramen',           emoji:'🍜', color:'#fb923c', vibes:['feel-good','nostalgic'],             bg:'linear-gradient(150deg,#1a0500,#6b2200)' },
  { id:'dog',          label:'Dog',             emoji:'🐕', color:'#4ade80', vibes:['feel-good','emotional'],             bg:'linear-gradient(150deg,#021a05,#075918)' },
  { id:'candle',       label:'Candle',          emoji:'🕯️', color:'#fbbf24', vibes:['romantic','dark','nostalgic'],       bg:'linear-gradient(150deg,#1a0f00,#5a3200)' },
  { id:'rain',         label:'Rain',            emoji:'🌧️', color:'#818cf8', vibes:['dark','emotional','romantic'],       bg:'linear-gradient(150deg,#07091a,#1e2460)' },
  { id:'guitar',       label:'Guitar',          emoji:'🎸', color:'#fb923c', vibes:['feel-good','nostalgic','romantic'],  bg:'linear-gradient(150deg,#1a0800,#7c2d00)' },
  { id:'ice',          label:'Ice Block',       emoji:'🧊', color:'#7dd3fc', vibes:['dark','horror'],                    bg:'linear-gradient(150deg,#00101a,#003050)' },
  { id:'plant',        label:'Potted Plant',    emoji:'🪴', color:'#86efac', vibes:['feel-good','nostalgic'],             bg:'linear-gradient(150deg,#021205,#054014)' },
  { id:'blackhole',    label:'Black Hole',      emoji:'🕳️', color:'#a78bfa', vibes:['mind-bending','sci-fi','dark'],      bg:'linear-gradient(150deg,#050010,#200050)' },
  { id:'bigtop',       label:'Big Top',         emoji:'🎪', color:'#fbbf24', vibes:['comedy','nostalgic','adventure'],    bg:'linear-gradient(150deg,#200a00,#7a2f00)' },
  { id:'magnet',       label:'Magnet',          emoji:'🧲', color:'#f87171', vibes:['mystery','romantic'],               bg:'linear-gradient(150deg,#1a0010,#600040)' },
  { id:'mirror',       label:'Mirror',          emoji:'🪞', color:'#c084fc', vibes:['mind-bending','dark','mystery'],    bg:'linear-gradient(150deg,#100020,#3c0070)' },
  { id:'wave',         label:'Wave',            emoji:'🌊', color:'#38bdf8', vibes:['emotional','adventure'],            bg:'linear-gradient(150deg,#00101e,#003460)' },
  { id:'key',          label:'Key',             emoji:'🔑', color:'#fbbf24', vibes:['mystery','adventure'],              bg:'linear-gradient(150deg,#1a1000,#5a4000)' },
  { id:'snake',        label:'Snake',           emoji:'🐍', color:'#4ade80', vibes:['dark','horror','mystery'],          bg:'linear-gradient(150deg,#021500,#0a4000)' },
  { id:'wine',         label:'Wine Glass',      emoji:'🍷', color:'#fb7185', vibes:['romantic','feel-good'],             bg:'linear-gradient(150deg,#2a0010,#800030)' },
  { id:'puzzle',       label:'Puzzle',          emoji:'🧩', color:'#c084fc', vibes:['mystery','mind-bending'],           bg:'linear-gradient(150deg,#0d0530,#2d1570)' },
  { id:'saturn',       label:'Saturn',          emoji:'🪐', color:'#67e8f9', vibes:['sci-fi','mind-bending'],            bg:'linear-gradient(150deg,#000a18,#002050)' },
  { id:'carousel',     label:'Carousel',        emoji:'🎠', color:'#fda4af', vibes:['nostalgic','romantic','dark'],      bg:'linear-gradient(150deg,#1a0510,#6b1540)' },
  { id:'shell',        label:'Shell',           emoji:'🐚', color:'#fdba74', vibes:['nostalgic','emotional'],            bg:'linear-gradient(150deg,#1a0d00,#6b3800)' },
  { id:'crystalball',  label:'Crystal Ball',    emoji:'🔮', color:'#d8b4fe', vibes:['mystery','mind-bending'],           bg:'linear-gradient(150deg,#100030,#400090)' },
  { id:'cactus',       label:'Cactus',          emoji:'🌵', color:'#86efac', vibes:['adventure','dark'],                 bg:'linear-gradient(150deg,#021008,#083020)' },
  { id:'masks',        label:'Theatre Masks',   emoji:'🎭', color:'#fcd34d', vibes:['comedy','emotional','nostalgic'],   bg:'linear-gradient(150deg,#1a0f00,#604000)' },
  { id:'teddybear',    label:'Teddy Bear',      emoji:'🧸', color:'#fdba74', vibes:['nostalgic','feel-good','emotional'],bg:'linear-gradient(150deg,#1a0e00,#604000)' },
  { id:'axe',          label:'Axe',             emoji:'🪓', color:'#f87171', vibes:['dark','horror','action'],           bg:'linear-gradient(150deg,#1a0000,#600000)' },
  { id:'moon',         label:'Crescent Moon',   emoji:'🌙', color:'#818cf8', vibes:['dark','romantic','mystery'],        bg:'linear-gradient(150deg,#07091a,#1e2460)' },
  { id:'dice',         label:'Dice',            emoji:'🎲', color:'#fbbf24', vibes:['comedy','adventure'],               bg:'linear-gradient(150deg,#0f0a00,#403000)' },
  { id:'butterfly',    label:'Butterfly',       emoji:'🦋', color:'#fda4af', vibes:['emotional','feel-good','romantic'], bg:'linear-gradient(150deg,#1a0510,#5a1a40)' },
  { id:'ruins',        label:'Abandoned House', emoji:'🏚️', color:'#a78bfa', vibes:['dark','horror','nostalgic'],        bg:'linear-gradient(150deg,#0a0010,#300040)' },
  { id:'mushroom',     label:'Mushroom',        emoji:'🍄', color:'#fb923c', vibes:['mind-bending','comedy','adventure'],bg:'linear-gradient(150deg,#1a0800,#6b2800)' },
  { id:'mousetrap',    label:'Mousetrap',       emoji:'🪤', color:'#fbbf24', vibes:['dark','mystery','comedy'],          bg:'linear-gradient(150deg,#0f0a00,#4a3000)' },
  { id:'violin',       label:'Violin',          emoji:'🎻', color:'#fda4af', vibes:['emotional','romantic','nostalgic'], bg:'linear-gradient(150deg,#1a0410,#5a1030)' },
  { id:'octopus',      label:'Octopus',         emoji:'🐙', color:'#7dd3fc', vibes:['mystery','mind-bending','sci-fi'],  bg:'linear-gradient(150deg,#000e1a,#002a50)' },
  { id:'compass',      label:'Compass',         emoji:'🧭', color:'#fdba74', vibes:['adventure','feel-good'],            bg:'linear-gradient(150deg,#120800,#4a2800)' },
  { id:'heart',        label:'Anatomical Heart',emoji:'🫀', color:'#f87171', vibes:['emotional','dark','horror'],        bg:'linear-gradient(150deg,#1a0000,#600010)' },
  { id:'tornado',      label:'Tornado',         emoji:'🌪️', color:'#94a3b8', vibes:['action','dark','adventure'],       bg:'linear-gradient(150deg,#0a0a10,#202030)' },
  { id:'urn',          label:'Urn',             emoji:'🏺', color:'#c4b5fd', vibes:['dark','nostalgic','emotional'],     bg:'linear-gradient(150deg,#0d0820,#300060)' },
  { id:'wolf',         label:'Wolf',            emoji:'🐺', color:'#cbd5e1', vibes:['dark','adventure','horror'],        bg:'linear-gradient(150deg,#080a10,#181c30)' },
  { id:'moonviewing',  label:'Moon Viewing',    emoji:'🎑', color:'#a5b4fc', vibes:['nostalgic','emotional','romantic'], bg:'linear-gradient(150deg,#080514,#1e1540)' },
  { id:'evileye',      label:'Evil Eye',        emoji:'🪬', color:'#67e8f9', vibes:['mystery','horror','dark'],          bg:'linear-gradient(150deg,#00050a,#001830)' },
  { id:'dna',          label:'DNA',             emoji:'🧬', color:'#6ee7b7', vibes:['sci-fi','mystery','mind-bending'],  bg:'linear-gradient(150deg,#001510,#003830)' },
  { id:'volcano',      label:'Volcano',         emoji:'🌋', color:'#f87171', vibes:['action','dark','adventure'],        bg:'linear-gradient(150deg,#1a0000,#700000)' },
  { id:'ferriswheel',  label:'Ferris Wheel',    emoji:'🎡', color:'#fbbf24', vibes:['nostalgic','romantic','feel-good'], bg:'linear-gradient(150deg,#1a0d00,#604000)' },
  { id:'rabbit',       label:'Rabbit',          emoji:'🐇', color:'#f1f5f9', vibes:['mystery','mind-bending','dark'],    bg:'linear-gradient(150deg,#0a0a14,#202040)' },
  { id:'blood',        label:'Blood Drop',      emoji:'🩸', color:'#f87171', vibes:['horror','dark','action'],           bg:'linear-gradient(150deg,#150000,#5a0000)' },
  { id:'slingshot',    label:'Slingshot',       emoji:'🪁', color:'#86efac', vibes:['adventure','comedy','action'],      bg:'linear-gradient(150deg,#041500,#0e4a00)' },
  { id:'ufo',          label:'UFO',             emoji:'🛸', color:'#a5f3fc', vibes:['sci-fi','mystery','mind-bending'],  bg:'linear-gradient(150deg,#000c18,#002045)' },
  { id:'fullmoon',     label:'Full Moon',       emoji:'🌕', color:'#fef08a', vibes:['dark','nostalgic','emotional'],     bg:'linear-gradient(150deg,#0a0a00,#302800)' },
  { id:'nazar',        label:'Nazar Amulet',    emoji:'🧿', color:'#60a5fa', vibes:['mystery','horror'],                 bg:'linear-gradient(150deg,#000a20,#002060)' },
  { id:'bubbles',      label:'Bubbles',         emoji:'🫧', color:'#bae6fd', vibes:['feel-good','comedy','romantic'],    bg:'linear-gradient(150deg,#001018,#003050)' },
];

const ICONS_MAP = Object.fromEntries(ICONS.map(i => [i.id, i]));

const FILMS = [
  // ── MAINSTREAM ───────────────────────────────────────────────────────────
  { id:1,  title:'The Dark Knight',                     year:2008, type:'mainstream', vibes:['dark','action','mystery'],                    desc:'Batman faces the Joker\'s anarchic reign over Gotham City.',                                        emoji:'🦇' },
  { id:2,  title:'Inception',                           year:2010, type:'mainstream', vibes:['mind-bending','sci-fi','action'],              desc:'A thief plants an idea deep in a target\'s subconscious through layered dreams.',                   emoji:'🌀' },
  { id:3,  title:'La La Land',                          year:2016, type:'mainstream', vibes:['romantic','feel-good','emotional','nostalgic'], desc:'Two dreamers fall in and out of love while chasing their ambitions in Los Angeles.',               emoji:'🎭' },
  { id:4,  title:'Get Out',                             year:2017, type:'mainstream', vibes:['horror','mystery','dark'],                     desc:'A Black man uncovers disturbing secrets hidden beneath his girlfriend\'s family estate.',            emoji:'😨' },
  { id:5,  title:'Interstellar',                        year:2014, type:'mainstream', vibes:['sci-fi','emotional','adventure','mind-bending'],desc:'Astronauts travel through a wormhole searching for humanity\'s next home.',                       emoji:'🚀' },
  { id:6,  title:'The Grand Budapest Hotel',            year:2014, type:'mainstream', vibes:['comedy','adventure','nostalgic'],              desc:'A legendary concierge and his lobby boy navigate war-torn Europe in absurdist style.',              emoji:'🏨' },
  { id:7,  title:'Parasite',                            year:2019, type:'mainstream', vibes:['dark','mystery','comedy','emotional'],         desc:'A poor Korean family infiltrates the household of a wealthy family with cunning deception.',         emoji:'🪜' },
  { id:8,  title:'Mad Max: Fury Road',                  year:2015, type:'mainstream', vibes:['action','dark','sci-fi'],                      desc:'A high-octane chase across a post-apocalyptic wasteland fuelled by survival and fury.',              emoji:'🔥' },
  { id:9,  title:'Her',                                 year:2013, type:'mainstream', vibes:['romantic','sci-fi','emotional'],               desc:'A lonely writer falls deeply in love with an artificially intelligent operating system.',            emoji:'💌' },
  { id:10, title:'Hereditary',                          year:2018, type:'mainstream', vibes:['horror','dark','emotional'],                   desc:'Grief unravels terrifying hereditary secrets within a grieving family.',                            emoji:'👻' },
  { id:11, title:'Knives Out',                          year:2019, type:'mainstream', vibes:['mystery','comedy','feel-good'],                desc:'A sharp-tongued detective unravels a wealthy family\'s elaborate web of lies.',                     emoji:'🔪' },
  { id:12, title:'Everything Everywhere All at Once',   year:2022, type:'mainstream', vibes:['mind-bending','action','emotional','comedy'],  desc:'A laundromat owner must connect with parallel-universe selves to save existence itself.',            emoji:'🥢' },
  { id:13, title:'Whiplash',                            year:2014, type:'mainstream', vibes:['dark','emotional'],                           desc:'A jazz student is pushed to his psychological and physical limits by a tyrannical conductor.',        emoji:'🥁' },
  { id:14, title:'Arrival',                             year:2016, type:'mainstream', vibes:['sci-fi','emotional','mystery','mind-bending'], desc:'A linguist attempts to communicate with alien visitors before global panic ignites a war.',           emoji:'🛸' },
  { id:15, title:'Gone Girl',                           year:2014, type:'mainstream', vibes:['dark','mystery','action'],                    desc:'When his wife vanishes, a husband becomes the prime suspect in a media-frenzied mystery.',           emoji:'🕵️' },
  { id:16, title:'Eternal Sunshine of the Spotless Mind',year:2004,type:'mainstream', vibes:['romantic','mind-bending','emotional'],        desc:'A heartbroken couple undergoes a procedure to erase each other from memory.',                        emoji:'💆' },
  { id:17, title:'Fight Club',                          year:1999, type:'mainstream', vibes:['dark','action','mind-bending'],               desc:'An insomniac and a charismatic soap salesman build an underground fight club together.',              emoji:'👊' },
  { id:18, title:'Black Swan',                          year:2010, type:'mainstream', vibes:['dark','horror','emotional'],                  desc:'A perfectionist ballerina unravels as obsession consumes her preparation for Swan Lake.',            emoji:'🩰' },
  { id:19, title:'The Shape of Water',                  year:2017, type:'mainstream', vibes:['romantic','dark','sci-fi','feel-good'],       desc:'A mute janitor forms a profound bond with an amphibious creature held captive at a lab.',            emoji:'🐟' },
  { id:20, title:'The Truman Show',                     year:1998, type:'mainstream', vibes:['mind-bending','comedy','emotional','nostalgic'],desc:'A man slowly realises his entire life has been a televised reality show.',                         emoji:'📺' },
  { id:21, title:'The Shining',                         year:1980, type:'mainstream', vibes:['horror','dark','mystery','mind-bending'],     desc:'A writer descends into madness while isolated as winter caretaker of a haunted hotel.',              emoji:'🪓' },
  { id:22, title:'Brokeback Mountain',                  year:2005, type:'mainstream', vibes:['romantic','emotional','dark'],                desc:'Two cowboys navigate a secret, forbidden love affair spanning two painful decades.',                  emoji:'🤠' },
  { id:23, title:'The Revenant',                        year:2015, type:'mainstream', vibes:['dark','adventure','action'],                  desc:'A frontiersman battles brutal wilderness to exact revenge after being left for dead.',                emoji:'🐻' },
  { id:24, title:'Gravity',                             year:2013, type:'mainstream', vibes:['sci-fi','adventure','action'],                desc:'Two astronauts struggle to survive after debris destroys their shuttle in deep space.',               emoji:'🌍' },
  { id:25, title:'A Beautiful Mind',                    year:2001, type:'mainstream', vibes:['mind-bending','emotional','feel-good'],       desc:'A brilliant mathematician battles schizophrenia on his extraordinary path to a Nobel Prize.',         emoji:'🧠' },

  // ── MAINSTREAM (continued) ───────────────────────────────────────────────
  { id:51, title:'Pulp Fiction',                        year:1994, type:'mainstream', vibes:['dark','comedy','action'],                    desc:'Interweaving criminal tales of hitmen, gangsters and a boxer collide in sun-baked Los Angeles.',       emoji:'💊' },
  { id:52, title:'Schindler\'s List',                   year:1993, type:'mainstream', vibes:['dark','emotional'],                          desc:'A war profiteer becomes an unlikely saviour, rescuing over a thousand Jews from the Holocaust.',       emoji:'📋' },
  { id:53, title:'Forrest Gump',                        year:1994, type:'mainstream', vibes:['feel-good','emotional','nostalgic'],          desc:'A kind-hearted Alabama man stumbles through five decades of American history.',                        emoji:'🏃' },
  { id:54, title:'The Matrix',                          year:1999, type:'mainstream', vibes:['sci-fi','action','mind-bending'],             desc:'A hacker discovers that reality is a simulation — and is chosen to lead the human resistance.',         emoji:'🕶️' },
  { id:55, title:'Memento',                             year:2000, type:'mainstream', vibes:['mystery','mind-bending','dark'],              desc:'A man with no short-term memory pieces together his wife\'s murder — told in reverse.',                emoji:'🧩' },
  { id:56, title:'Gladiator',                           year:2000, type:'mainstream', vibes:['action','dark','emotional'],                  desc:'A Roman general enslaved becomes a gladiator and seeks vengeance against the emperor who killed his family.', emoji:'🦁' },
  { id:57, title:'Requiem for a Dream',                 year:2000, type:'mainstream', vibes:['dark','emotional','horror'],                  desc:'Four people spiral into addiction as their dreams dissolve into desperate obsession.',                 emoji:'💉' },
  { id:58, title:'Amélie',                              year:2001, type:'mainstream', vibes:['romantic','feel-good','nostalgic','comedy'],  desc:'A whimsical Parisian café waitress secretly engineers happiness for everyone around her.',              emoji:'🎠' },
  { id:59, title:'Pan\'s Labyrinth',                    year:2006, type:'mainstream', vibes:['dark','adventure','emotional','mind-bending'],desc:'A child escapes into a dangerous fantasy realm while fascism brutalises 1940s Spain.',                 emoji:'🧚' },
  { id:60, title:'No Country for Old Men',              year:2007, type:'mainstream', vibes:['dark','mystery','action'],                    desc:'A hunter stumbles on drug money and unleashes an unstoppable, philosophising killer.',                emoji:'🪙' },
  { id:61, title:'There Will Be Blood',                 year:2007, type:'mainstream', vibes:['dark','emotional'],                          desc:'An oil prospector\'s monstrous ambition consumes everything — and everyone — around him.',              emoji:'🛢️' },
  { id:62, title:'Moonrise Kingdom',                    year:2012, type:'mainstream', vibes:['romantic','nostalgic','comedy','feel-good'], desc:'Two misfit twelve-year-olds fall in love and run away into the wilderness together.',                  emoji:'🔭' },
  { id:63, title:'The Wolf of Wall Street',             year:2013, type:'mainstream', vibes:['comedy','action','dark'],                    desc:'A stockbroker\'s ascent into excess, fraud, and depravity is as hilarious as it is horrifying.',       emoji:'💰' },
  { id:64, title:'The Social Network',                  year:2010, type:'mainstream', vibes:['dark','action','emotional'],                  desc:'The creation of Facebook leaves a trail of broken friendships, lawsuits, and moral compromise.',        emoji:'💻' },
  { id:65, title:'Birdman',                             year:2014, type:'mainstream', vibes:['mind-bending','comedy','dark','emotional'],   desc:'A faded superhero actor stages a Broadway comeback while his grip on reality unravels.',               emoji:'🦅' },
  { id:66, title:'The Martian',                         year:2015, type:'mainstream', vibes:['sci-fi','adventure','feel-good','comedy'],    desc:'An astronaut stranded on Mars must science his way to survival with wit and potatoes.',                emoji:'🌌' },
  { id:67, title:'Blade Runner 2049',                   year:2017, type:'mainstream', vibes:['sci-fi','dark','mind-bending','emotional'],   desc:'A replicant detective uncovers a secret that could shatter the fragile order of a dying world.',        emoji:'🤖' },
  { id:68, title:'1917',                                year:2019, type:'mainstream', vibes:['action','dark','adventure','emotional'],      desc:'Two British soldiers race against time through no-man\'s land to deliver a message that could save 1,600 lives.', emoji:'🪖' },
  { id:69, title:'Joker',                               year:2019, type:'mainstream', vibes:['dark','emotional'],                          desc:'A failed comedian\'s slow collapse into madness births one of Gotham\'s most iconic villains.',         emoji:'🃏' },
  { id:70, title:'Soul',                                year:2020, type:'mainstream', vibes:['feel-good','emotional','comedy','mind-bending'],desc:'A jazz musician\'s near-death crisis leads him to question what truly gives life its meaning.',        emoji:'🎷' },
  { id:71, title:'Dune',                                year:2021, type:'mainstream', vibes:['sci-fi','adventure','dark'],                  desc:'A nobleman\'s son is thrust into the brutal politics and mysticism of a desert planet.',                emoji:'🏜️' },
  { id:72, title:'The Banshees of Inisherin',           year:2022, type:'mainstream', vibes:['dark','comedy','emotional'],                  desc:'A man is devastated when his lifelong friend abruptly ends their friendship without explanation.',      emoji:'🪗' },
  { id:73, title:'Oppenheimer',                         year:2023, type:'mainstream', vibes:['dark','mind-bending','emotional','action'],   desc:'The father of the atomic bomb grapples with the terrifying consequences of his creation.',             emoji:'☢️' },
  { id:74, title:'Cast Away',                           year:2000, type:'mainstream', vibes:['adventure','emotional','feel-good'],          desc:'A FedEx executive stranded on a deserted island fights to survive and find a reason to go on.',         emoji:'🏝️' },
  { id:75, title:'12 Years a Slave',                    year:2013, type:'mainstream', vibes:['dark','emotional'],                          desc:'A free Black man is kidnapped and sold into slavery, enduring years of brutal captivity.',              emoji:'⛓️' },

  // ── INDIE ─────────────────────────────────────────────────────────────────
  { id:26, title:'Moonlight',                           year:2016, type:'indie', vibes:['dark','emotional','romantic'],                    desc:'A young Black man in Miami explores identity, masculinity, and love in three tender chapters.',       emoji:'🌙' },
  { id:27, title:'Lady Bird',                           year:2017, type:'indie', vibes:['nostalgic','comedy','emotional'],                 desc:'A headstrong Sacramento teen navigates family friction, first love, and the pull of escape.',          emoji:'🐦' },
  { id:28, title:'Frances Ha',                          year:2012, type:'indie', vibes:['feel-good','comedy','nostalgic','emotional'],     desc:'A broke, dreamy dancer stumbles gracefully through life and friendship in New York City.',             emoji:'🗽' },
  { id:29, title:'Blue Valentine',                      year:2010, type:'indie', vibes:['romantic','dark','emotional'],                   desc:'A marriage\'s beginning and end are woven together in raw, aching non-linear heartbreak.',             emoji:'💙' },
  { id:30, title:'Short Term 12',                       year:2013, type:'indie', vibes:['emotional','feel-good','dark'],                  desc:'A supervisor at a foster care facility quietly confronts her own unresolved childhood trauma.',        emoji:'🏠' },
  { id:31, title:'Swiss Army Man',                      year:2016, type:'indie', vibes:['comedy','emotional','adventure','mind-bending'], desc:'A stranded castaway befriends a talking corpse with impossible and hilarious powers.',                emoji:'🪦' },
  { id:32, title:'The Witch',                           year:2015, type:'indie', vibes:['horror','dark','mystery'],                       desc:'A devout Puritan family at the edge of New England wilderness falls prey to ancient evil.',            emoji:'🧙' },
  { id:33, title:'Annihilation',                        year:2018, type:'indie', vibes:['sci-fi','horror','mind-bending'],                desc:'A biologist enters a shimmering zone where biology, physics, and identity dissolve.',                 emoji:'🌿' },
  { id:34, title:'A Ghost Story',                       year:2017, type:'indie', vibes:['emotional','mind-bending','nostalgic','dark'],   desc:'A ghost draped in a white sheet silently watches time continue without him.',                        emoji:'🕯️' },
  { id:35, title:'The Florida Project',                 year:2017, type:'indie', vibes:['emotional','feel-good','dark'],                  desc:'A spirited six-year-old navigates a motel childhood in the shadow of Walt Disney World.',             emoji:'🏰' },
  { id:36, title:'Pig',                                 year:2021, type:'indie', vibes:['emotional','dark','feel-good','mystery'],        desc:'A reclusive truffle hunter travels into Portland\'s underworld to find his beloved stolen pig.',       emoji:'🐷' },
  { id:37, title:'Safety Not Guaranteed',               year:2012, type:'indie', vibes:['romantic','sci-fi','feel-good','comedy'],        desc:'Journalists investigate a classified ad placed by a man seeking a time-travel companion.',            emoji:'⏰' },
  { id:38, title:'Beginners',                           year:2010, type:'indie', vibes:['romantic','emotional','feel-good','nostalgic'],  desc:'A man processes his father\'s late coming-out and his own cautious new love simultaneously.',          emoji:'🌻' },
  { id:39, title:'Manchester by the Sea',               year:2016, type:'indie', vibes:['dark','emotional'],                             desc:'A grieving janitor must return home and face an unbearable past when he becomes a guardian.',          emoji:'⚓' },
  { id:40, title:'Paterson',                            year:2016, type:'indie', vibes:['feel-good','nostalgic','emotional'],             desc:'A bus-driver poet quietly observes the beauty and poetry buried in ordinary daily life.',              emoji:'📓' },
  { id:41, title:'Good Time',                           year:2017, type:'indie', vibes:['dark','action','mystery'],                      desc:'A desperate criminal drags himself and his brother through a chaotic, electric night in New York.',    emoji:'🌃' },
  { id:42, title:'Midsommar',                           year:2019, type:'indie', vibes:['horror','dark','mind-bending','emotional'],      desc:'A couple travels to a Swedish midsummer festival where the relentless sun hides dark rituals.',        emoji:'🌸' },
  { id:43, title:'Portrait of a Lady on Fire',          year:2019, type:'indie', vibes:['romantic','emotional','nostalgic'],             desc:'A painter secretly immortalises the portrait of a woman she is falling deeply in love with.',         emoji:'🎨' },
  { id:44, title:'The Lobster',                         year:2015, type:'indie', vibes:['dark','comedy','romantic','mind-bending'],       desc:'In a dystopia, single people must find a mate within 45 days or be turned into an animal.',          emoji:'🦞' },
  { id:45, title:'Hunt for the Wilderpeople',           year:2016, type:'indie', vibes:['adventure','comedy','feel-good','emotional'],    desc:'A rebellious foster boy and his reluctant uncle go on the run through New Zealand\'s wild bush.',      emoji:'🌲' },
  { id:46, title:'Coherence',                           year:2013, type:'indie', vibes:['sci-fi','mystery','dark','mind-bending'],        desc:'A dinner party grows profoundly strange as a comet passes overhead and parallel realities split.',    emoji:'☄️' },
  { id:47, title:'Aftersun',                            year:2022, type:'indie', vibes:['nostalgic','emotional','dark'],                  desc:'An adult woman reconstructs fragmented holiday memories of her troubled young father.',               emoji:'☀️' },
  { id:48, title:'Beasts of the Southern Wild',         year:2012, type:'indie', vibes:['adventure','emotional','feel-good'],             desc:'A fierce six-year-old girl faces floods and prehistoric creatures with pure, defiant resilience.',     emoji:'🐗' },
  { id:49, title:'Tangerine',                           year:2015, type:'indie', vibes:['comedy','emotional','dark'],                    desc:'A trans sex worker rampages through Los Angeles on Christmas Eve hunting for her cheating boyfriend.', emoji:'🍊' },
  { id:50, title:'Under the Skin',                      year:2013, type:'indie', vibes:['sci-fi','dark','horror','mystery'],              desc:'An alien in human form silently roams Scotland, preying on men who get too close.',                   emoji:'🔴' },

  // ── INDIE (continued) ────────────────────────────────────────────────────
  { id:76, title:'Before Sunrise',                      year:1995, type:'indie', vibes:['romantic','nostalgic','feel-good'],              desc:'Two strangers spend one unplanned night walking and talking through Vienna before dawn separates them.',emoji:'🌅' },
  { id:77, title:'Mulholland Drive',                    year:2001, type:'indie', vibes:['dark','mystery','mind-bending','horror'],        desc:'An aspiring actress and an amnesiac unravel an enigmatic, dreamlike mystery in Hollywood.',            emoji:'🎬' },
  { id:78, title:'Donnie Darko',                        year:2001, type:'indie', vibes:['dark','sci-fi','mind-bending','emotional'],      desc:'A troubled teenager is visited by a monstrous rabbit who warns of the world\'s imminent end.',         emoji:'🐰' },
  { id:79, title:'Lost in Translation',                 year:2003, type:'indie', vibes:['romantic','nostalgic','emotional'],              desc:'Two jet-lagged strangers form an unlikely, tender connection drifting through neon-lit Tokyo.',         emoji:'🏮' },
  { id:80, title:'Y Tu Mamá También',                   year:2001, type:'indie', vibes:['romantic','adventure','emotional'],              desc:'Two teenage boys and an older woman take a road trip across Mexico that changes all three forever.',    emoji:'🛣️' },
  { id:81, title:'Primer',                              year:2004, type:'indie', vibes:['sci-fi','mind-bending','mystery'],               desc:'Two engineers accidentally invent a time machine and watch their partnership collapse under its weight.', emoji:'⏱️' },
  { id:82, title:'Little Miss Sunshine',                year:2006, type:'indie', vibes:['comedy','feel-good','emotional'],                desc:'A dysfunctional family road-trips to California so their daughter can compete in a beauty pageant.',    emoji:'🚌' },
  { id:83, title:'Once',                                year:2007, type:'indie', vibes:['romantic','feel-good','emotional'],              desc:'A busker and a pianist forge a brief, luminous musical partnership on the streets of Dublin.',          emoji:'🎸' },
  { id:84, title:'In Bruges',                           year:2008, type:'indie', vibes:['dark','comedy','action'],                        desc:'Two hitmen lie low in medieval Bruges after a botched job — while their boss seethes.',                emoji:'🔔' },
  { id:85, title:'Let the Right One In',                year:2008, type:'indie', vibes:['dark','horror','romantic','emotional'],          desc:'A bullied boy forms an achingly tender friendship with the girl next door — who is a vampire.',         emoji:'❄️' },
  { id:86, title:'500 Days of Summer',                  year:2009, type:'indie', vibes:['romantic','comedy','emotional'],                 desc:'A hopeless romantic looks back on a 500-day relationship that never went the way he imagined.',         emoji:'☁️' },
  { id:87, title:'Take Shelter',                        year:2011, type:'indie', vibes:['dark','mind-bending','emotional','mystery'],     desc:'A man plagued by apocalyptic visions builds an underground shelter — unable to tell madness from prophecy.', emoji:'⛈️' },
  { id:88, title:'Boyhood',                             year:2014, type:'indie', vibes:['nostalgic','emotional','feel-good'],             desc:'Filmed over twelve years, a boy grows from age six to eighteen before our eyes in real time.',           emoji:'📸' },
  { id:89, title:'Ex Machina',                          year:2014, type:'indie', vibes:['sci-fi','dark','mind-bending','mystery'],        desc:'A programmer is invited to evaluate a eerily lifelike AI — and nothing is as it seems.',               emoji:'🔬' },
  { id:90, title:'It Follows',                          year:2014, type:'indie', vibes:['horror','dark','mystery'],                      desc:'After a sexual encounter a teenager is pursued by a relentless, shape-shifting supernatural force.',    emoji:'👣' },
  { id:91, title:'Room',                                year:2015, type:'indie', vibes:['dark','emotional','feel-good'],                  desc:'A mother and her young son escape their captor — then face the overwhelming outside world.',             emoji:'🚪' },
  { id:92, title:'The Favourite',                       year:2018, type:'indie', vibes:['dark','comedy','mystery'],                      desc:'Two cousins scheme and seduce in a bitter battle for the affections of an ailing 18th-century queen.',  emoji:'👑' },
  { id:93, title:'The Lighthouse',                      year:2019, type:'indie', vibes:['dark','horror','mind-bending'],                  desc:'Two lighthouse keepers are stranded on a remote island and slowly descend into madness together.',      emoji:'🔦' },
  { id:94, title:'The Power of the Dog',                year:2021, type:'indie', vibes:['dark','mystery','emotional'],                    desc:'A magnetic but cruel rancher\'s domineering grip on his family is challenged by an unexpected bond.',    emoji:'🐕' },
  { id:95, title:'The Worst Person in the World',       year:2021, type:'indie', vibes:['romantic','emotional','comedy'],                 desc:'A Norwegian woman drifts through relationships and identities searching for who she really wants to be.',emoji:'📱' },
  { id:96, title:'Call Me by Your Name',                year:2017, type:'indie', vibes:['romantic','emotional','nostalgic'],              desc:'A teenage boy and an older scholar share a passionate, sun-soaked summer romance in northern Italy.',    emoji:'🍑' },
  { id:97, title:'Burning',                             year:2018, type:'indie', vibes:['dark','mystery','emotional'],                    desc:'A young man becomes obsessed with an enigmatic acquaintance who confesses to a disturbing pastime.',    emoji:'🌾' },
  { id:98, title:'Past Lives',                          year:2023, type:'indie', vibes:['romantic','emotional','nostalgic'],              desc:'Childhood sweethearts reconnect across continents and decades, reckoning with the lives they didn\'t live.', emoji:'✈️' },
  { id:99, title:'Triangle of Sadness',                 year:2022, type:'indie', vibes:['dark','comedy','action'],                        desc:'Models, oligarchs, and crew are stranded together on a desert island after a luxury cruise goes wrong.',emoji:'🛳️' },
  { id:100,title:'Saint Maud',                          year:2019, type:'indie', vibes:['horror','dark','mind-bending'],                  desc:'A devout nurse becomes dangerously fixated on saving the soul of her hedonistic dying patient.',         emoji:'✝️' },

  // ── WORLD CINEMA ─────────────────────────────────────────────────────────
  { id:101,title:'Seven Samurai',                       year:1954, type:'world', vibes:['action','dark','adventure'],                     desc:'A poor village hires seven ronin to defend it against bandits in feudal Japan.',                        emoji:'⚔️' },
  { id:102,title:'Tokyo Story',                         year:1953, type:'world', vibes:['emotional','nostalgic','feel-good'],              desc:'An elderly couple travel to visit their grown children in Tokyo, only to find themselves a burden.',      emoji:'🗾' },
  { id:103,title:'Bicycle Thieves',                     year:1948, type:'world', vibes:['dark','emotional','feel-good'],                   desc:'A desperate father and his young son search the streets of Rome for his stolen bicycle.',               emoji:'🚲' },
  { id:104,title:'Rashomon',                            year:1950, type:'world', vibes:['mystery','dark','mind-bending'],                  desc:'Four contradictory accounts of a samurai\'s murder reveal how truth bends to self-interest.',            emoji:'🌧️' },
  { id:105,title:'8½',                                  year:1963, type:'world', vibes:['mind-bending','nostalgic','comedy'],              desc:'A film director escapes into fantasy and memory while struggling to make his next picture.',              emoji:'🎪' },
  { id:106,title:'Aguirre, the Wrath of God',           year:1972, type:'world', vibes:['dark','adventure','action'],                     desc:'A conquistador leads a doomed expedition into the Amazon, consumed by delusion and megalomania.',         emoji:'⛵' },
  { id:107,title:'Fanny and Alexander',                 year:1982, type:'world', vibes:['nostalgic','emotional','feel-good'],              desc:'A Swedish family\'s richly observed Christmas becomes the backdrop for a child\'s journey through wonder and darkness.', emoji:'🧸' },
  { id:108,title:'Crouching Tiger, Hidden Dragon',      year:2000, type:'world', vibes:['action','romantic','adventure'],                  desc:'Two legendary warriors and a rebellious aristocrat collide in a sweeping story of honour and desire.',    emoji:'🐯' },
  { id:109,title:'City of God',                         year:2002, type:'world', vibes:['dark','action','emotional'],                     desc:'Two boys grow up on opposite sides of violence in Rio de Janeiro\'s most dangerous favela.',               emoji:'🏙️' },
  { id:110,title:'Oldboy',                              year:2003, type:'world', vibes:['dark','mystery','action','mind-bending'],         desc:'A man imprisoned for 15 years with no explanation is suddenly freed and hunts obsessively for the truth.', emoji:'🦑' },
  { id:111,title:'The Lives of Others',                 year:2006, type:'world', vibes:['dark','mystery','emotional'],                    desc:'A Stasi officer secretly surveilling a playwright slowly finds his conscience awakening.',                emoji:'📻' },
  { id:112,title:'4 Months, 3 Weeks and 2 Days',        year:2007, type:'world', vibes:['dark','emotional'],                              desc:'A Romanian student navigates a harrowing illegal abortion under the final years of Ceaușescu\'s regime.',  emoji:'🕰️' },
  { id:113,title:'The White Ribbon',                    year:2009, type:'world', vibes:['dark','mystery','horror'],                       desc:'Strange, violent events haunt a remote German village on the eve of the First World War.',                emoji:'🎀' },
  { id:114,title:'A Separation',                        year:2011, type:'world', vibes:['dark','emotional','mystery'],                    desc:'A Tehran couple\'s divorce spirals into a moral labyrinth with no clean answers for anyone.',              emoji:'⚖️' },
  { id:115,title:'Amour',                               year:2012, type:'world', vibes:['dark','emotional','romantic'],                   desc:'An elderly Parisian couple face the brutal, tender reality of one partner\'s declining health.',           emoji:'💐' },
  { id:116,title:'Blue Is the Warmest Colour',          year:2013, type:'world', vibes:['romantic','emotional','dark'],                   desc:'A teenage girl\'s life is transformed by a passionate and consuming love affair with an older art student.',emoji:'🔵' },
  { id:117,title:'Wild Tales',                          year:2014, type:'world', vibes:['dark','comedy','action'],                        desc:'Six darkly comic tales of revenge, rage, and the thin line between civilization and chaos.',               emoji:'💥' },
  { id:118,title:'Toni Erdmann',                        year:2016, type:'world', vibes:['comedy','emotional','dark'],                     desc:'An eccentric father crashes his daughter\'s corporate life in Bucharest wearing a fake identity.',          emoji:'🦷' },
  { id:119,title:'The Handmaiden',                      year:2016, type:'world', vibes:['dark','romantic','mystery','mind-bending'],      desc:'A con artist\'s scheme to defraud a Japanese heiress unravels into a twisting tale of betrayal and desire.',emoji:'🎴' },
  { id:120,title:'Roma',                                year:2018, type:'world', vibes:['dark','emotional','nostalgic'],                  desc:'A year in the life of a housekeeper for a middle-class family in 1970s Mexico City.',                     emoji:'🌺' },
  { id:121,title:'Cold War',                            year:2018, type:'world', vibes:['romantic','dark','nostalgic'],                   desc:'Two musicians fall repeatedly in and out of love across divided Cold War Europe over fifteen years.',      emoji:'🎵' },
  { id:122,title:'Shoplifters',                         year:2018, type:'world', vibes:['emotional','feel-good','dark'],                  desc:'A makeshift family of small-time Tokyo criminals take in an abandoned child and guard their fragile bond.', emoji:'🛒' },
  { id:123,title:'Atlantics',                           year:2019, type:'world', vibes:['dark','romantic','mystery'],                     desc:'Young migrants lost at sea return to haunt the Senegalese city they left behind.',                        emoji:'🌊' },
  { id:124,title:'Parasite',                            year:2019, type:'world', vibes:['dark','mystery','comedy','emotional'],           desc:'A poor Korean family infiltrates the household of a wealthy family with cunning, escalating deception.',   emoji:'🪜' },
  { id:125,title:'Minari',                              year:2020, type:'world', vibes:['emotional','feel-good','dark'],                  desc:'A Korean-American family plant roots on an Arkansas farm, chasing dreams that may break them.',            emoji:'🌱' },
  { id:126,title:'Drive My Car',                        year:2021, type:'world', vibes:['emotional','nostalgic','dark'],                  desc:'A theatre director processing grief slowly opens up to his quietly perceptive young chauffeur.',           emoji:'🚗' },
  { id:127,title:'Titane',                              year:2021, type:'world', vibes:['dark','horror','mind-bending'],                  desc:'A titanium-plated serial killer assumes a dead man\'s identity and forms an impossible bond.',             emoji:'🔩' },
  { id:128,title:'Decision to Leave',                   year:2022, type:'world', vibes:['romantic','mystery','dark'],                     desc:'A South Korean detective becomes obsessed with the enigmatic widow of a man he\'s investigating.',         emoji:'💎' },
  { id:129,title:'Anatomy of a Fall',                   year:2023, type:'world', vibes:['dark','mystery','emotional'],                    desc:'A woman is tried for her husband\'s death in a case where truth refuses to stay still.',                  emoji:'🗂️' },
  { id:130,title:'Monster',                             year:2023, type:'world', vibes:['emotional','mystery','feel-good'],               desc:'A troubled schoolboy\'s story is told three times, each version revealing a new, devastating layer.',      emoji:'🎏' },
];

// ═══════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════

let selectedIcons = [null, null, null];
let filmMode      = 'mainstream';
let filmOffset    = 0;
let draggedIconId = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Active icon IDs currently in the physics bowl (16 at a time)
const DISPLAY_COUNT = 16;
let activeIconIds = shuffle(ICONS.map(i => i.id)).slice(0, DISPLAY_COUNT);

// ═══════════════════════════════════════════════
//  RECOMMENDATIONS
// ═══════════════════════════════════════════════

function getActiveVibes() {
  // Union all vibes from selected icons
  const vibeSet = new Set();
  selectedIcons.filter(Boolean).forEach(id => {
    const icon = ICONS_MAP[id];
    if (icon) icon.vibes.forEach(v => vibeSet.add(v));
  });
  return [...vibeSet];
}

function getScoredPool() {
  const active = getActiveVibes();
  const pool   = FILMS.filter(f => f.type === filmMode);

  if (active.length === 0) {
    return pool.map(f => ({ ...f, score: 1 }));
  }

  const scored = pool
    .map(f => ({ ...f, score: f.vibes.filter(v => active.includes(v)).length }))
    .filter(f => f.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.length > 0 ? scored : pool.map(f => ({ ...f, score: 0 }));
}

function getFilmsToShow() {
  const pool = getScoredPool();
  if (pool.length === 0) return [];

  const count = Math.min(3, pool.length);
  const start = (filmOffset * 3) % pool.length;
  const result = [];
  const seen   = new Set();

  for (let i = 0; i < count; i++) {
    const film = pool[(start + i) % pool.length];
    if (!seen.has(film.id)) { result.push(film); seen.add(film.id); }
  }
  return result;
}

// ═══════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  PHYSICS ENGINE
// ═══════════════════════════════════════════════

let physicsEngine, physicsBodies = [], physicsNodes = [], physicsRAF;
let grabId = null; // icon ID currently being dragged out of bowl
const BALL_R = 32;
const BOWL_SIZE = 420;

function initPhysics() {
  const wrap   = document.getElementById('physics-wrap');
  const canvas = document.getElementById('physics-canvas');
  const W = BOWL_SIZE, H = BOWL_SIZE;
  canvas.width = W; canvas.height = H;
  const cx = W / 2, cy = H / 2, R = W / 2;

  // Remove old icon DOM nodes
  physicsNodes.forEach(n => n.remove());
  physicsNodes = [];
  grabId = null;

  if (!window.Matter) return;
  const { Engine, Bodies, Body, World, Events, Mouse, MouseConstraint } = Matter;

  if (physicsEngine) {
    if (physicsEngine._cleanupListeners) physicsEngine._cleanupListeners();
    World.clear(physicsEngine.world);
    Engine.clear(physicsEngine);
    if (physicsRAF) cancelAnimationFrame(physicsRAF);
  }

  physicsEngine = Engine.create({ gravity: { x: 0, y: 1.1 } });
  const world = physicsEngine.world;

  // Circular walls (64 segments)
  const SEG = 64;
  for (let i = 0; i < SEG; i++) {
    const a1 = (i / SEG) * Math.PI * 2, a2 = ((i + 1) / SEG) * Math.PI * 2;
    const x1 = cx + (R - 3) * Math.cos(a1), y1 = cy + (R - 3) * Math.sin(a1);
    const x2 = cx + (R - 3) * Math.cos(a2), y2 = cy + (R - 3) * Math.sin(a2);
    const wall = Bodies.rectangle((x1+x2)/2, (y1+y2)/2,
      Math.hypot(x2-x1, y2-y1), 10, {
        isStatic: true, angle: Math.atan2(y2-y1, x2-x1),
        friction: 0.3, restitution: 0.5
      });
    World.add(world, wall);
  }

  // Spawn balls
  physicsBodies = [];
  activeIconIds.forEach((id, idx) => {
    const a = (idx / activeIconIds.length) * Math.PI * 2;
    const bx = cx + R * 0.42 * Math.cos(a) + (Math.random()-0.5)*20;
    const by = cy + R * 0.42 * Math.sin(a) + (Math.random()-0.5)*20 - R*0.15;
    const body = Bodies.circle(bx, by, BALL_R, {
      restitution: 0.5, friction: 0.04, frictionAir: 0.016,
      density: 0.002, label: id
    });
    Body.setVelocity(body, { x: (Math.random()-0.5)*5, y: (Math.random()-0.5)*5 });
    physicsBodies.push(body);
    World.add(world, body);

    // DOM emoji node
    const node = document.createElement('div');
    node.className = 'icon-node entering';
    node.dataset.iconId = id;
    node.style.cssText = `
      width:${BALL_R*2}px; height:${BALL_R*2}px;
      font-size:${Math.round(BALL_R*1.0)}px;
      left:${bx}px; top:${by}px;
      background:${ICONS_MAP[id].bg};
      box-shadow: 0 4px 18px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1);
      border: 1.5px solid rgba(255,255,255,0.09);
      animation-delay:${idx*0.035}s;
    `;
    node.textContent = ICONS_MAP[id].emoji;
    wrap.appendChild(node);
    physicsNodes.push(node);
    node.addEventListener('animationend', () => node.classList.remove('entering'), { once: true });
  });

  // Matter.js mouse — feed global mouse position manually for out-of-bowl drag
  const mouse = Mouse.create(canvas);
  const mc = MouseConstraint.create(physicsEngine, {
    mouse,
    constraint: { stiffness: 0.18, damping: 0.1, render: { visible: false } }
  });
  World.add(world, mc);

  // Track which body is being grabbed
  let activeBody = null;
  let mouseWasDown = false;
  let dragMoved = false;
  let mouseDownPos = { x: 0, y: 0 };

  Events.on(mc, 'startdrag', e => {
    activeBody = e.body;
    grabId = e.body ? e.body.label : null;
    dragMoved = false;
  });
  Events.on(mc, 'enddrag', () => {
    activeBody = null;
    grabId = null;
    document.getElementById('drag-ghost').style.display = 'none';
  });

  // Update Matter mouse position from any mouse event (enables out-of-canvas drag)
  function syncMousePos(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    mouse.position.x = (clientX - rect.left) * scaleX;
    mouse.position.y = (clientY - rect.top)  * scaleY;
    mouse.absolute.x = mouse.position.x;
    mouse.absolute.y = mouse.position.y;
  }

  // Global mousemove: update physics mouse so drag works outside canvas
  function onGlobalMove(e) {
    if (!activeBody) return;
    syncMousePos(e.clientX, e.clientY);

    // Show ghost when outside canvas rect
    const rect = canvas.getBoundingClientRect();
    const outside = e.clientX < rect.left || e.clientX > rect.right ||
                    e.clientY < rect.top  || e.clientY > rect.bottom;
    const ghost = document.getElementById('drag-ghost');
    if (outside && grabId) {
      const icon = ICONS_MAP[grabId];
      document.getElementById('ghost-emoji').textContent = icon.emoji;
      document.getElementById('ghost-label').textContent = icon.label;
      ghost.style.display = 'flex';
      ghost.style.left = e.clientX + 'px';
      ghost.style.top  = e.clientY + 'px';
    } else {
      ghost.style.display = 'none';
    }

    // Highlight slot under cursor
    document.querySelectorAll('.drop-slot').forEach(s => s.classList.remove('over'));
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el) el.closest('.drop-slot')?.classList.add('over');
  }

  // Global mouseup: drop on slot if outside canvas
  function onGlobalUp(e) {
    document.getElementById('drag-ghost').style.display = 'none';
    document.querySelectorAll('.drop-slot').forEach(s => s.classList.remove('over'));
    if (!grabId) return;
    const rect = canvas.getBoundingClientRect();
    const outside = e.clientX < rect.left || e.clientX > rect.right ||
                    e.clientY < rect.top  || e.clientY > rect.bottom;
    if (outside) {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const slot = el && el.closest('.drop-slot');
      if (slot) {
        const id  = grabId;
        const idx = parseInt(slot.id.split('-')[1]);
        // Release the physics constraint first
        mouse.button = -1;
        activeBody = null;
        grabId = null;
        addIconToSlot(id, idx);
        return;
      }
    }
  }

  document.addEventListener('mousemove', onGlobalMove);
  document.addEventListener('mouseup',   onGlobalUp);

  // Clean up listeners when physics is torn down next time
  physicsEngine._cleanupListeners = () => {
    document.removeEventListener('mousemove', onGlobalMove);
    document.removeEventListener('mouseup',   onGlobalUp);
  };

  // Draw loop
  const ctx = canvas.getContext('2d');
  function loop() {
    physicsRAF = requestAnimationFrame(loop);
    Engine.update(physicsEngine, 1000 / 60);

    ctx.clearRect(0, 0, W, H);
    // Bowl fill
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.fillStyle = '#0b0b1a'; ctx.fill();
    // Radial glow
    const grad = ctx.createRadialGradient(cx, cy-R*0.25, R*0.05, cx, cy, R);
    grad.addColorStop(0,   'rgba(124,58,237,0.07)');
    grad.addColorStop(0.65,'rgba(0,0,0,0)');
    grad.addColorStop(1,   'rgba(124,58,237,0.22)');
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.fillStyle = grad; ctx.fill();
    // Border
    ctx.beginPath(); ctx.arc(cx, cy, R-1, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(124,58,237,0.3)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.restore();

    // Sync DOM nodes
    physicsBodies.forEach((body, i) => {
      const node = physicsNodes[i]; if (!node) return;
      node.style.left = body.position.x + 'px';
      node.style.top  = body.position.y + 'px';
      const used = selectedIcons.includes(body.label);
      node.classList.toggle('used', used);
    });
  }
  loop();
}

function renderPalette() {
  // Update icon node used states (physics loop handles position)
  physicsNodes.forEach(node => {
    const id   = node.dataset.iconId;
    const used = selectedIcons.includes(id);
    node.classList.toggle('used', used);
  });
}

function renderSlots() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`slot-${i}`);
    const iId  = selectedIcons[i];

    // hover wired in wireSlots()

    if (iId) {
      const icon = ICONS_MAP[iId];
      slot.className = 'drop-slot filled';
      slot.style.cssText = `background: ${icon.bg}; border-color: transparent;`;
      slot.innerHTML = `
        <div class="slot-content">
          <div class="slot-emoji">${icon.emoji}</div>
          <div class="slot-label" style="color:${icon.color}">${icon.label}</div>
        </div>
        <button class="slot-remove" onclick="removeIcon(${i})" title="Remove">✕</button>`;
    } else {
      slot.className = 'drop-slot';
      slot.style.cssText = '';
      slot.innerHTML = `<span class="slot-placeholder">VIBE ${i + 1}</span>`;
    }
  }
}

function renderFilms() {
  const films  = getFilmsToShow();
  const active = selectedIcons.filter(Boolean);
  const title  = document.getElementById('films-title');
  const grid   = document.getElementById('film-grid');

  if (active.length > 0) {
    title.textContent = active.map(id => ICONS_MAP[id].emoji + ' ' + ICONS_MAP[id].label).join('  ·  ');
    title.classList.add('has-vibes');
  } else {
    title.textContent = 'Recommended for you';
    title.classList.remove('has-vibes');
  }

  if (films.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎭</div>
        <p>No films match that combination.<br>Try swapping one of your vibes.</p>
      </div>`;
    return;
  }

  grid.innerHTML = films.map((f, idx) => {
    const pv   = VIBES_MAP[f.vibes[0]];
    const bg   = pv ? pv.bg : 'linear-gradient(150deg,#0d0d1e,#1a1040)';
    const tags = f.vibes.map(vid => {
      const v = VIBES_MAP[vid];
      return v ? `<span class="film-tag" style="background:${v.tagBg};color:${v.tagColor}">${v.emoji} ${v.label}</span>` : '';
    }).join('');

    return `
      <div class="film-card" style="animation-delay:${idx * 0.08}s">
        <div class="film-poster" style="background:${bg}">
          <div class="film-poster-icon">${f.emoji}</div>
          <div class="film-year-badge">${f.year}</div>
        </div>
        <div class="film-body">
          <div class="film-title">${f.title}</div>
          <div class="film-meta">
            <span class="film-type">${f.type}</span>
          </div>
          <div class="film-desc">${f.desc}</div>
          <div class="film-tags">${tags}</div>
        </div>
      </div>`;
  }).join('');
}

function render() {
  renderSlots();
  renderPalette();
  renderFilms();
}

// Click on canvas (no drag) → add to next empty slot
document.getElementById('physics-canvas').addEventListener('click', e => {
  if (grabId) return; // was a drag, not click
  // find body under cursor
  if (!window.Matter || !physicsEngine) return;
  const canvas = document.getElementById('physics-canvas');
  const rect   = canvas.getBoundingClientRect();
  const scaleX = BOWL_SIZE / rect.width;
  const mx = (e.clientX - rect.left) * scaleX;
  const my = (e.clientY - rect.top)  * scaleX;
  const hit = physicsBodies.find(b => {
    const dx = b.position.x - mx, dy = b.position.y - my;
    return Math.hypot(dx, dy) < BALL_R + 4;
  });
  if (hit) onPillClick(hit.label);
});

function addIconToSlot(iconId, slotIdx) {
  const existing = selectedIcons.indexOf(iconId);
  if (existing !== -1 && existing !== slotIdx) {
    const tmp               = selectedIcons[slotIdx];
    selectedIcons[slotIdx]  = iconId;
    selectedIcons[existing] = tmp;
    filmOffset = 0;
    render();
    return;
  }
  if (existing === slotIdx) return;

  selectedIcons[slotIdx] = iconId;
  filmOffset = 0;
  render();
}

// Click-to-add (mobile-friendly fallback)
function onPillClick(iconId) {
  if (selectedIcons.includes(iconId)) return;
  const empty = selectedIcons.indexOf(null);
  if (empty === -1) return;
  selectedIcons[empty] = iconId;
  filmOffset = 0;
  render();
}

function removeIcon(slotIdx) {
  selectedIcons[slotIdx] = null;
  filmOffset = 0;
  render();
}

// ═══════════════════════════════════════════════
//  CONTROLS
// ═══════════════════════════════════════════════

function shuffleIcons() {
  // Keep 50% of current icons (those not selected, randomly chosen)
  const keep    = Math.floor(DISPLAY_COUNT / 2);
  const current = activeIconIds.filter(id => !selectedIcons.includes(id));
  const keepers = shuffle(current).slice(0, keep);

  // Fill the rest from icons NOT currently active
  const pool   = shuffle(ICONS.map(i => i.id).filter(id => !activeIconIds.includes(id)));
  const newOnes = pool.slice(0, DISPLAY_COUNT - keepers.length);

  activeIconIds = shuffle([...keepers, ...newOnes]);
  initPhysics();
}

function setMode(mode) {
  filmMode = mode;
  filmOffset = 0;
  document.getElementById('btn-mainstream').classList.toggle('active', mode === 'mainstream');
  document.getElementById('btn-indie').classList.toggle('active', mode === 'indie');
  document.getElementById('btn-world').classList.toggle('active', mode === 'world');
  renderFilms();
}

function refresh() {
  filmOffset++;
  const btn = document.getElementById('refresh-btn');
  btn.classList.remove('spin');
  void btn.offsetWidth; // reflow to restart animation
  btn.classList.add('spin');
  btn.addEventListener('animationend', () => btn.classList.remove('spin'), { once: true });
  renderFilms();
}

// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════
render();

// Load Matter.js then boot physics
const mScript = document.createElement('script');
mScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
mScript.onload = () => initPhysics();
document.head.appendChild(mScript);
