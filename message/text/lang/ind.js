/* eslint-disable quotes */
const { prefix } = require('../../../config.json')


exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.cmdNotFound = (cmd) => {
    return `Perinta *${prefix}${cmd}* tidak ditemukan! Silakan Liat #Menu`
}

/*dengan format:\n*${prefix}register* nama | umur\n\n *CONTOH* : \n ${prefix}register Caca Cantika | 16  \n *inget pakai tanda* "|"*/
exports.notRegistered = () => {
    return `Kamu belum terdaftar \n\n Silakan Daftar Sesuai Totorial di YT kami #liatYT   `
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\n Hallo Ka Pendaftaran kamu sudah dterima dengan data n\ ➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸\n\nCatatan:\n Follow Sosial Media kita untuk liat info Update Seputar Bot @indobotwa \n\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya. langsung Pakai aja ke menu`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}


exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Oh Sorry Ka, Batas atau limit Pengunaan Km udah habis untuk hari ini tunggu besok
#tambahlimit

    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan telepon bot.
Sanksi: *AUTO BLOCK*

2. Jangan SPAM bot.
Sanksi: *AUTO BLOCK*

3. Berkata Kasar
Sanksi: *AUTO BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----


Bot Update 2021

Contact person:
instragram.com/indobotwa

Terima kasih!

@indobotwa.
    `
}


//**************************************************************************************************************************** */
/*MENU UTAMA BOT---------------------------------------------------------------------------------------------------------------*/

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
------[ Indobotwa Menu  ]-----
======================
➸ *Name*: ${pushname}
➸ *Premium*: ${premium}
======================
Berikut adalah menu Utama Bot Kita:

*[1]* Stiker biasa dari photo/video atau Text
*[2]* Text Pro Me
*[3]* Photo Oxy ?
*[4]* Ephoto 360
*[5]* Download
*[6]* Fun/Game
*[7]* Menu Islam

Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih
Contoh : ${prefix}Menu 1  ==>untuk membua Menu Download

    `
}

exports.menuSticker = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*-----[ STICKER ]-----*
¦ • *${prefix}sticker* (riply/diskripsi Photo)
¦ • *${prefix}stickergif* (riply/diskripsi video max 6 detik)
¦ • *${prefix}ttp* text

_Index of [1]_
    `
}

exports.menuTextpro = (pushname) => {
    return `
Hallo ${pushname}
*-----[ Text Pro Me ]-----*
¦ • ${prefix}blackpink text
¦ • ${prefix}neon text
¦ • ${prefix}greenneon text
¦ • ${prefix}advanceglow text
¦ • ${prefix}futureneon text
¦ • ${prefix}sandwriting text
¦ • ${prefix}sandsummer text
¦ • ${prefix}sandengraved text
¦ • ${prefix}metaldark text
¦ • ${prefix}neonlight text
¦ • ${prefix}holographic text
¦ • ${prefix}text1917 text
¦ • ${prefix}minion text
¦ • ${prefix}deluxesilver text
¦ • ${prefix}newyearcard text
¦ • ${prefix}bloodfrosted text
¦ • ${prefix}halloween text
¦ • ${prefix}jokerlogo text
¦ • ${prefix}fireworksparkle text
¦ • ${prefix}natureleaves text
¦ • ${prefix}bokeh text
¦ • ${prefix}toxic text
¦ • ${prefix}strawberry text
¦ • ${prefix}box3d text
¦ • ${prefix}roadwarning text
¦ • ${prefix}breakwall text
¦ • ${prefix}icecold text
¦ • ${prefix}luxury text
¦ • ${prefix}cloud text
¦ • ${prefix}summersand text
¦ • ${prefix}horrorblood text
¦ • ${prefix}thunder text
¦ • ${prefix}pornhub text1 text2
¦ • ${prefix}glitch text1 text2
¦ • ${prefix}avenger text1 text2
¦ • ${prefix}space text1 text2
¦ • ${prefix}ninjalogo text1 text2
¦ • ${prefix}marvelstudio text1 text2
¦ • ${prefix}lionlogo text1 text2
¦ • ${prefix}wolflogo text1 text2
¦ • ${prefix}steel3d text1 text2
¦ • ${prefix}wallgravity text1 text2

_Index of [2]_
    `
}


exports.menuOxy = (pushname) => {
    return `
    *Photo Oxy*

¦ • ${prefix}shadow text
¦ • ${prefix}cup text
¦ • ${prefix}cup1 text
¦ • ${prefix}romance text
¦ • ${prefix}smoke text
¦ • ${prefix}burnpaper text
¦ • ${prefix}lovemessage text
¦ • ${prefix}undergrass text
¦ • ${prefix}love text
¦ • ${prefix}coffe text
¦ • ${prefix}woodheart text
¦ • ${prefix}woodenboard text
¦ • ${prefix}summer3d text
¦ • ${prefix}wolfmetal text
¦ • ${prefix}nature3d text
¦ • ${prefix}underwater text
¦ • ${prefix}golderrose text
¦ • ${prefix}summernature text
¦ • ${prefix}letterleaves text
¦ • ${prefix}glowingneon text
¦ • ${prefix}fallleaves text
¦ • ${prefix}flamming text
¦ • ${prefix}harrypotter text
¦ • ${prefix}carvedwood text
¦ • ${prefix}tiktok text1 text2
¦ • ${prefix}arcade8bit text1 text2
¦ • ${prefix}battlefield4 text1 text2
¦ • ${prefix}pubg text1 text2

_Index of [3]_
    `
}

exports.menu360 = (pushname) => {
    return `
Hallo ${pushname}
¦--? Ephoto 360 ?
¦ • ${prefix}wetglass text
¦ • ${prefix}multicolor3d text
¦ • ${prefix}watercolor text
¦ • ${prefix}luxurygold text
¦ • ${prefix}galaxywallpaper text
¦ • ${prefix}lighttext text
¦ • ${prefix}beautifulflower text
¦• ${prefix}puppycute text
¦• ${prefix}royaltext text
¦• ${prefix}heartshaped text
¦• ${prefix}birthdaycake text
¦• ${prefix}galaxystyle text
¦• ${prefix}hologram3d text
¦ • ${prefix}greenneon text
¦ • ${prefix}glossychrome text
¦ • ${prefix}greenbush text
¦ • ${prefix}metallogo text
¦ • ${prefix}noeltext text
¦ • ${prefix}glittergold text
¦ • ${prefix}textcake text
¦ • ${prefix}starsnight text
¦ • ${prefix}wooden3d text
¦ • ${prefix}textbyname text
¦ • ${prefix}writegalacy text
¦ • ${prefix}galaxybat text
¦ • ${prefix}snow3d text
¦ • ${prefix}birthdayday text
¦ • ${prefix}goldplaybutton text
¦ • ${prefix}silverplaybutton text
¦ • ${prefix}freefire text

_Index of [4]_
    `
}


exports.menuDownload = (pushname) => {
    return `
Hallo ${pushname}
¦--? Downloader ?
¦ • ${prefix}ytsearch query
¦ • ${prefix}ytplay query
¦ • ${prefix}ytplay2 query
¦ • ${prefix}ytmp3 url_video
¦ • ${prefix}ytmp32 url_video
¦ • ${prefix}ytmp4 url_video
¦ • ${prefix}ytmp42 url_video
¦ • ${prefix}tiktoknowm url_video
¦ • ${prefix}tiktokmusic url_video
¦ • ${prefix}igdl url_post
¦ • ${prefix}fbdl url_video
¦ • ${prefix}jooxplay query
¦ • ${prefix}spotify url_music
¦ • ${prefix}spotifysearch query
¦ • ${prefix}pinterest query
¦ • ${prefix}pinterestdl url_pinterest
¦ • ${prefix}pixiv query
¦ • ${prefix}pixivdl url_pixiv
¦ • ${prefix}zippyshare url_zippyshare
¦ • ${prefix}telesticker url_pack
_Index of [5]_
    `
}

exports.menugame = (pushname) => {
    return `
Hallo ${pushname}
-----[ FUN / Game ]-----
¦ • ${prefix}tebakgambar


_Index of [6]_
    `
}

exports.menuislam = (pushname) => {
    return `
Hallo ${pushname}
-----[ Menu Islam]-----
¦--? Islami ?
¦ • ${prefix}listsurah
¦ • ${prefix}asmaulhusna
¦ • ${prefix}alquran no_surah
¦ • ${prefix}alquran no_surah/no_ayat
¦ • ${prefix}alquran no_surah/no_ayat1-no_ayat2
¦ • ${prefix}alquranaudio no_surah
¦ • ${prefix}alquranaudio no_surah/no_ayat
¦ • ${prefix}kisahnabi nama_nabi
¦ • ${prefix}jadwalsholat daerah


_Index of [7]_
    `
}
