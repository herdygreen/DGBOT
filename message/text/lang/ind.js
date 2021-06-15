/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

/*MENU UTAMA BOT---------------------------------------------------------------------*/
exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
------[ Hallo Teman Bot  ]-----
======================
➸ *Name*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}
➸ *Premium*: ${premium}
======================
Berikut adalah menu Utama Bot Kita: 😊
____________
*Menu Stiker Maker*🤖
#sticker (photo)
#stickergif (vidio/gif)
#ttx (text)


kostom stiker kirim photo dengan
#stickermeme (teks1) |  (teks2)

#stickerwm (teks1) |  (teks2)
buat stiker dengan info diksripsi punya km


____________
*Menu Buat Photo Keren dari Text*👩🏼‍🎨
#kiss (gambar)
#feature ( text)
#blackpink ( text)
#neon ( text)
#greenneon ( text)
#advanceglow ( text)
#futureneon ( text)
#sandwriting ( text)
#sandsummer ( text)
#sandengraved ( text)
#metaldark ( text)
#neonlight ( text)
#holographic ( text)
#text1917 ( text)
#minion ( text)
#deluxesilver ( text)
#newyearcard ( text)
#bloodfrosted ( text)
#halloween ( text)
#jokerlogo ( text)
#fireworksparkle ( text)
#natureleaves ( text)
#bokeh ( text)
#toxic ( text)
#strawberry ( text)
#box3d ( text)
#roadwarning ( text)
#breakwall ( text)
#icecold ( text)
#luxury ( text)
#cloud ( text)
#summersand ( text)
#horrorblood ( text)
#thunder ( text)


#shadow ( text)
#cup ( text)
#cup2 ( text)
#romance ( text)
#smoke ( text)
#burnpaper ( text)
#lovemessage ( text)
#undergrass ( text)
#love ( text)
#coffe ( text)
#woodheart ( text)
#woodenboard ( text)
#summer3d ( text)
#wolfmetal ( text)
#nature3d ( text)
#underwater ( text)
#goldenrose ( text)
#summernature ( text)
#letterleaves ( text)
#glowingneon ( text)
#fallleaves ( text)
#flamming ( text)
#harrypotter ( text)
#carvedwood ( text)

#wetglass ( text)
#multicolor3d ( text)
#watercolor ( text)
#luxurygold ( text)
#galaxywallpaper ( text)
#lighttext ( text)
#beautifulflower ( text)
#puppycute ( text)
#royaltext ( text)
#heartshaped ( text)
#birthdaycake ( text)
#galaxystyle ( text)
#hologram3d ( text)
#greenneon ( text)
#glossychrome ( text)
#greenbush ( text)
#metallogo ( text)
#noeltext ( text)
#glittergold ( text)
#textcake ( text)
#starsnight ( text)
#wooden3d ( text)
#textbyname ( text)
#writegalaxy ( text)
#galaxybat ( text)
#snow3d ( text)
#birthdayday ( text)
#goldplaybutton ( text)
#silverplaybutton ( text)
#freefire ( text)
#cartoongravity ( text)
#anonymhacker ( text)


*Menu Download*😊
#ytmp3 (link YT)
____________
*Menu Ramadhan* 🕌
 #randomquran otw
 _____________
*Menu Lainya* 🧙
 #google  (yang dicari)

____________
Liat Menu Premium
#menupremium

Catatan:
jika Bot tidak Membalas Berati Perintah yang kamu berikan tidak benar.
jika bot cek list satu hubungi owner di instragram @indobotwa

    `
}


exports.cobagratis = (res) => {
    return `
untuk mencoba gratis
1. Screenshot (SS) bukti like dan subscribe channel ini
https://www.youtube.com/watch?v=P5CY7fPcwS8&t

2. Kirim SS kamu dengan Deskripsi #udahbos

`
}

/*dengan format:\n*${prefix}register* nama | umur\n\n *CONTOH* : \n ${prefix}register Caca Cantika | 16  \n *inget pakai tanda* "|"*/
exports.notRegistered = () => {
    return `

Kamu Belum terdaftar 
Daftar Premium atau gunakan Aplikasi 

*kamu bisa coba gratis*
ketik
#cobagratis

  `
}

exports.daily = (time) => {
    return `

masa gratis km habis

Daftar Premium atau Gunakan Aplikasi

Kamu bisa Install Aplikasi INDOBOTWA
untuk akses gratis Fitur Bot sepuasnya
aplikasi sudah tersedia di Playstore

Sorry you can See Indobotwa Menu in Aplikasi 

Download On Google Play Store
https://play.google.com/store/search?q=indobotwa&c=apps

Wajib Kasih Komentar dan Bintang 5
jika tidak km akan diblok

❏ *_*
	
	`
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*
masa gratis km habis

Daftar Premium atau Gunakan Aplikasi

Kamu bisa Install Aplikasi INDOBOTWA
untuk akses gratis Fitur Bot sepuasnya
aplikasi sudah tersedia di Playstore

Sorry you can See Indobotwa Menu in Aplikasi 

Download On Google Play Store
https://play.google.com/store/search?q=indobotwa&c=apps

Wajib Kasih Komentar dan Bintang 5
jika tidak km akan diblok

❏ *_*

    `
}

exports.cekaplikasi = (pushname) => {
    return `
Install Aplikasi INDOBOTWA

Download On Google Play Store
https://play.google.com/store/search?q=indobotwa&c=apps

Wajib Kasih Komentar dan Bintang 5
jika tidak km akan diblok
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

Pembayaran Hanya di
(Gopay, DANA, OVO, Shope Pulsa)
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















/*Tambahan Aja ==========================================================================================================*/

exports.wait = () => {
    return `Mohon tunggu sebentar ~`
}
exports.cll = () => {
    return `bot sudah lebih cepat ~`
}

exports.ok = () => {
    return `Ok Selesai Mantapkan~`
}
exports.manateks = () => {
    return `Teks nya mana ?`
}

exports.wrongFormat = () => {
    return `Upss Format km salah! n\ Silakan Gunakan Aplikasi #cekaplikasi*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Perinta *${prefix}${cmd}* Salah Silakan Gunakan Aplikasi #cekaplikasi`
}

exports.blocked = (ownerNumber) => {
    return `haduhh Be Smart Bro Bot Pasti tidak menerima panggilan. Karena kamu Telpon, maka kamu telah diblok!\n\nHarap hubungi owner: instragram.com/indobotwa untuk membuka blokir`
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


exports.registered = (name, age, userId, time, serial) => {
    return `*「 Suckses 」*\n\n Hallo Ka Pendaftaran kamu sudah dterima \n *Jangan Pernah Telp Bot Karena ada Fitur Auto Blok yg rugi km*  n\ untuk liat menu #menu ~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya. langsung Pakai aja ke menu`
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


exports.pc = (pushname) => {
    return ` *「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
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


exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! Mohon kembali ke masa muda anda agar bisa menggunakannya.`
}


exports.ss = () => {
    return `kirim ulang .. Bot ga deteksi SS Kamu!`
}


exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
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
