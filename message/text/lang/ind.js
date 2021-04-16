/* eslint-disable quotes */
const { prefix } = require('../../../config.json')


exports.wait = () => {
    return `Mohon tunggu sebentar ~`
}

exports.ok = () => {
    return `Ok Selesai Mantapkan~`
}

exports.wrongFormat = () => {
    return `Upss Format km salah! n\ Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Perinta *${prefix}${cmd}* tidak ditemukan! Perhatikan di #menu yah`
}

exports.blocked = (ownerNumber) => {
    return `haduhh Be Smart Bro Bot Pasti tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: instragram.com/indobotwa`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-can!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register dengan cara ketik:\n*${prefix}register* nama | umur`
}

exports.salah = () => {
    return `harus pakai Tanda '|' contoh #daf Jojo | 18`
}
exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------\n\nTotal diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytFound = (res) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${res.title}\n➸ *Deskripsi*:\n${res.desc}\n➸ *Durasi*: ${res.duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

/*dengan format:\n*${prefix}register* nama | umur\n\n *CONTOH* : \n ${prefix}register Caca Cantika | 16  \n *inget pakai tanda* "|"*/
exports.notRegistered = () => {
    return `Bot ini khusus Member Premium dan Kamu tidak terdaftar dalam member premium \n hubungi admin https://instagram.com/indobotwa \n untuk pemesaan member premium n\ untuk cek harga #harga  `
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\n Hallo Ka Pendaftaran kamu sudah dterima dengan data n\ ➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸\n\nCatatan:\n Follow Sosial Media kita untuk liat info Update Seputar Bot @indobotwa \n\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya. langsung Pakai aja ke menu`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Oh Sorry Ka, Batas atau limit Pengunaan Km udah habis n\ Kamu Bisa beli Member Premium mulai dr 2k n\ (Bisa Dana Ovo Gopay Pulsa) n\ DM IG kita \n instragram.com\indobotwa  n\ Order hanya Via Instragram 
	
	`
}

exports.videoLimit = () => {
    return `Upss Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengeluarkan mu...\nSelamat tinggal~`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nHanya admin yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nSekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKamu telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}


exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Oh Sorry Ka, Batas atau limit Pengunaan Km udah habis untuk hari ini tunggu besok
#tambahlimit

    `
}

exports.harga = () => {
    return `
Hallo Ka untuk jd Member Premium
Bisa langsung Pilih

**Donasi Bot Premium**

Paket 1 = 2k 1 hari Unlimited Chat

Paket 2 = 5k 7 hari Unlimited Chat

Paket 3 = 15k 30 Hari Unlimited Chat

Pembayaran Bisa di
(Gopay, DANA, OVO, Shope)
Pulsa Tanya dulu

🤗🤗🤗🤗🤗🤗

********
Pemesan only Instragram

Instragram.com/indobotwa

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
*[5]* Download (coming soon)
*[6]* Fun/Game
*[7]* Menu Islam

Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih
Contoh : ${prefix}Menu 1  ==>untuk membua Menu Download

    `
}

exports.menu1 = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*-----[ STICKER ]-----*
¦ • *${prefix}sticker* (riply/diskripsi Photo)
¦ • *${prefix}stickergif* (riply/diskripsi video max 6 detik)
¦ • *${prefix}ttp* text

_Index of [1]_
    `
}

exports.menu2 = (pushname) => {
    return `
*-----[ Text Pro Me ]-----*

¦ • ${prefix}blackpink (Text)
¦ • ${prefix}neon (Text)
¦ • ${prefix}greenneon (Text)
¦ • ${prefix}advanceglow (Text)
¦ • ${prefix}futureneon (Text)
¦ • ${prefix}sandwriting (Text)
¦ • ${prefix}sandsummer (Text)
¦ • ${prefix}sandengraved (Text)
¦ • ${prefix}metaldark (Text)
¦ • ${prefix}neonlight (Text)
¦ • ${prefix}holographic (Text)
¦ • ${prefix}text1917 (Text)
¦ • ${prefix}minion (Text)
¦ • ${prefix}deluxesilver (Text)
¦ • ${prefix}newyearcard (Text)
¦ • ${prefix}bloodfrosted (Text)
¦ • ${prefix}halloween (Text)
¦ • ${prefix}jokerlogo (Text)
¦ • ${prefix}fireworksparkle (Text)
¦ • ${prefix}natureleaves (Text)
¦ • ${prefix}bokeh (Text)
¦ • ${prefix}toxic (Text)
¦ • ${prefix}strawberry (Text)
¦ • ${prefix}box3d (Text)
¦ • ${prefix}roadwarning (Text)
¦ • ${prefix}breakwall (Text)
¦ • ${prefix}icecold (Text)
¦ • ${prefix}luxury (Text)
¦ • ${prefix}cloud (Text)
¦ • ${prefix}summersand (Text)
¦ • ${prefix}horrorblood (Text)
¦ • ${prefix}thunder (Text)


_Index of [2]_
    `
}


exports.menu3 = (pushname) => {
    return `
    *Photo Oxy*

¦ • ${prefix}shadow (Text)
¦ • ${prefix}cup (Text)
¦ • ${prefix}cup 2 (Text)
¦ • ${prefix}romance (Text)
¦ • ${prefix}smoke (Text)
¦ • ${prefix}burn paper (Text)
¦ • ${prefix}love message (Text)
¦ • ${prefix}under grass (Text)
¦ • ${prefix}love (Text)
¦ • ${prefix}coffe (Text)
¦ • ${prefix}wood heart (Text)
¦ • ${prefix}wooden board (Text)
¦ • ${prefix}summer 3d (Text)
¦ • ${prefix}wolf metal (Text)
¦ • ${prefix}nature 3d (Text)
¦ • ${prefix}under water (Text)
¦ • ${prefix}golden rose (Text)
¦ • ${prefix}summer nature (Text)
¦ • ${prefix}letter leaves (Text)
¦ • ${prefix}glowing neon (Text)
¦ • ${prefix}fall leaves (Text)
¦ • ${prefix}flamming (Text)
¦ • ${prefix}harry potter (Text)
¦ • ${prefix}carved wood (Text)
¦ • ${prefix}tiktok (Text1)|(Text2)
¦ • ${prefix}arcade8bit (Text1)|(Text2)
¦ • ${prefix}battlefield4 (Text1)|(Text2)
¦ • ${prefix}pubg (Text1)|(Text2)
¦ • ${prefix}bannerlol (Text1)|(Text2)



_Index of [3]_
    `
}

exports.menu4 = (pushname) => {
    return `

*Ephoto 360 Maker*

¦ • ${prefix}wetglass (Text)
¦ • ${prefix}multicolor3d (Text)
¦ • ${prefix}watercolor (Text)
¦ • ${prefix}luxurygold (Text)
¦ • ${prefix}galaxywallpaper (Text)
¦ • ${prefix}lighttext (Text)
¦ • ${prefix}beautifulflower (Text)
¦ • ${prefix}puppycute (Text)
¦ • ${prefix}royaltext (Text)
¦ • ${prefix}heartshaped (Text)
¦ • ${prefix}birthdaycake (Text)
¦ • ${prefix}galaxystyle (Text)
¦ • ${prefix}hologram3d (Text)
¦ • ${prefix}greenneon (Text)
¦ • ${prefix}glossychrome (Text)
¦ • ${prefix}greenbush (Text)
¦ • ${prefix}metallogo (Text)
¦ • ${prefix}noeltext (Text)
¦ • ${prefix}glittergold (Text)
¦ • ${prefix}textcake (Text)
¦ • ${prefix}starsnight (Text)
¦ • ${prefix}wooden3d (Text)
¦ • ${prefix}textbyname (Text)
¦ • ${prefix}writegalaxy (Text)
¦ • ${prefix}galaxybat (Text)
¦ • ${prefix}snow3d (Text)
¦ • ${prefix}birthdayday (Text)
¦ • ${prefix}goldplaybutton (Text)
¦ • ${prefix}silverplaybutton (Text)
¦ • ${prefix}freefire (Text)
¦ • ${prefix}cartoongravity (Text)
¦ • ${prefix}anonymhacker (Text)



_Index of [4]_
    `
}


exports.menu5- = (pushname) => {
    return `

*Downloader*
¦ • ${prefix}ytmp3 url_video
¦ • ${prefix}ytmp4 url_video
¦ • ${prefix}tiktoknowm url_video
¦ • ${prefix}tiktokmusic url_video


_Index of [5]_
    `
}

exports.menu6 = (pushname) => {
    return `
Hallo ${pushname}
-----[ FUN / Game ]-----

¦ • ${prefix}tebakgambar
¦ • *${prefix}nulis* text


_Index of [6]_
    `
}

exports.menu7 = (pushname) => {
    return `
Hallo ${pushname}
-----[ Menu Islam]-----
¦--? Islami ?
¦ • ${prefix}randomquran
¦ • ${prefix}

Yang Lain Segera datang


_Index of [7]_
    `
}
