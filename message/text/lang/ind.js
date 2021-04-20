/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.wait = () => {
    return `Mohon tunggu sebentar 😊  ~`
}

exports.ytFound = (res) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${res.title}\n➸ *Deskripsi*:\n${res.desc}\n➸ *Durasi*: ${res.duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.ss = () => {
    return `hallo   SS Bukti Like dan Subscribe nya mana Bro ☹️ .`
}


exports.ppmna = () => {
    return `Photonya/video yg mau dijadiin sticker mana ??😊 *.`
}

exports.wrongFormat = () => {
    return `Upss Format km salah! n\ Silakan cek cara penggunaan di *${prefix}menu*.`
}


exports.cmdNotFound = (cmd) => {
    return `Perinta *${prefix}${cmd}* tidak ditemukan! Perhatikan Format Perintah di #menu yah`
}

exports.blocked = (ownerNumber) => {
    return `haduhh Be Smart Bro Bot Pasti tidak menerima panggilan. Karena kamu telah telpon, maka kamu telah diblok!\n\nHarap hubungi owner: instragram.com/indobotwa`
}

exports.ownerOnly = () => {
    return `hallo   Command ini khusus Owner-can!`
}

exports.doneOwner = () => {
    return `Terima kasih `
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

exports.gratis = () => {
    return `
Cara Mendapatkan Akses Premium Gratis
1. Buat Story Instragran dan Tag @indobotwa denga photo ini 
https://bit.ly/32vMxGJ 

Dan kamu akan di DM Admin untuk di Kasih Akses Premium :)

syarat:
✅*Story tidak boleh dihapus*
✅*Follower diatas 300*
`
}

exports.daftar = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
hallo  
*Begini Cara Daftarnya*

1.Subscribe nyalakan Lonceng Youtube Kami

2. screenshot (ss) Video Di menit 01:00
https://www.youtube.com/watch?v=P5CY7fPcwS8&t=14s

5. Kirim  SS km dengan diskripsi #udahbos

4. dan Bot akan meverifikasi dengan cepat
    
    `
}

/*dengan format:\n*${prefix}register* nama | umur\n\n *CONTOH* : \n ${prefix}register Caca Cantika | 16  \n *inget pakai tanda* "|"*/
exports.notRegistered = () => {
    return `hallo Kamu belum terdaftar di database!\n\n Silakan ketik #caradaftar `
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\n Hallo Ka Pendaftaran kamu sudah dterima dengan data n\ ➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸\n\nCatatan:\n Follow Sosial Media kita untuk liat info Update Seputar Bot @indobotwa \n\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `hallo   Kamu sudah mendaftar sebelumnya. langsung Pakai aja ke menu`
}

exports.received = (pushname) => {
    return `Halo  !\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Oh Sorry Ka hallo  , Batas atau limit Pengunaan Km udah habis n\ Kamu Bisa Lakukan Ini n\ 1. Dafyat Member Premium mulai dr 2k n\ (BISA Dana Ovo Gopay Pulsa) n\ DM IG kita \n instragram.com\indobotwa  n\ Order hanya Via Instragram 
	
	`
}

exports.videoLimit = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `Upss Ukuran video terlalu besar  !`
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
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*:  \n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `* * telah kembali dari AFK! Selamat datang kembali~`
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
    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya  ~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
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

exports.menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫 (VF)* ❉═══
║
║ Untuk Spasi Teks menggunakan *+*
║ contoh : ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
║
╚══❉ *BocchiBot* ❉════
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}


exports.limit = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*── 「 LIMIT 」 ──*
➸  ${pushname} 
Upss, Batas/limit Pengunaan Km udah habis
Kamu bisa pakai lg Besok
limit otomatis nambah besok

Kamu Bisa beli Member Premium mulai dr 2k
Untuk Akses Unlimited dibot ini
DM IG kita instragram.com/indobotwa 
*Pemesanan hanya Via Instragram*
_cek harga_
#harga

_info gratis_
Ketik #limitgratis

    `
}

/*MENU UTAMA BOT---------------------------------------------------------------------*/
exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
Hallo Ka
➸ Name:  ${pushname}
➸ Premium: ${premium}
 ____________
Berikut adalah menu Utama Bot Kita: 😊
____________
*Menu Stiker Maker*🤖
#sticker (photo)
#stickergif (vidio/gif)
#ttp (text)

#stickerwm (teks1) |  (teks2)
(bikin stiker dengan nama km)

#stickermeme (teks1) |  (teks2)
(kostome stiker dengan tulisan)
____________
*Menu Buat Photo Keren*👩🏼‍🎨
#gaminglogo (Text)
#sparkling  (Text1 ) | (Text2)
#neon (Text)
#text3d (Text)
#Nulis (Text)
#pubg (text)
#kiss (gambar)
#kalender (link gambar)
 _____________
*Menu Fun* 🎮
 #tebakgambar
 #qoutes
 #cerpen
 #puisi
 ______________
*Menu Download*😊
#ytmp3 (link YT)
____________
*Menu Ramadhan* 🕌
 #randomquran otw
 _____________
*Menu Lainya* 🧙
 #google  (yang dicari)
 _____________
*Ketik ini* ⭐
#cll
____________
Liat Menu Premium
#menupremium
    `
}


exports.menuprem = () => {
    return `
------[ Hallo Teman Bot  ]-----   
Berikut adalah menu Premium yang tersedia:
    *[1]* Downloader
    *[2]* Bot
    *[3]* Misc
    *[4]* Sticker
    *[5]* Weeaboo
    *[6]* Fun
    *[7]* Moderation
    *[8]* NSFW
    *[9]* Owner
    *[10]* Leveling
    
Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih.
contoh : #menu 1


    `
}

exports.menuDownloader = () => {
    return `
-----[ DOWNLOADER ]-----

1. *${prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix}facebook* link_video

2. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* link

4. *${prefix}joox*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *${prefix}joox* judul_lagu

5. *${prefix}tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *${prefix}tiktok* link_video

6. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twiter* link

7. *${prefix}tiktokpic*
Download profile pic user
Aliases: -
Usage: *${prefix}tiktokpic* username

8. *${prefix}tiktoknowm*
Download video TikTok tanpa WM.
Aliases: *tktnowm*
Usage: *${prefix}tiktoknowm* link_video

9. *${prefix}moddroid*
Cari APK mod dari moddroid.
Aliases: -
Usage: *${prefix}moddroid* nama_APK

10. *${prefix}happymod*
Cari APK mod dari happymod.
Aliases: -
Usage: *${prefix}happymod* nama_APK

11. *${prefix}linedl*
Stiker Line downloader.
Aliases: -
Usage: *${prefix}linedl* link_stiker

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *${prefix}menu* angka_index

3. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

7. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

8. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

10. *${prefix}ownerbot*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

2. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

3. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

5. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

6. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

7. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

8. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

9. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

10. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

11. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

12. *${prefix}distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *${prefix}distance* kota_asal | kota_tujuan

13. *${prefix}findsticker*
Untuk mencari sticker yang kamu cari
Aliases: *findstiker*
Usage: *${prefix}findsticker* teks

14. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

15. *${prefix}listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

16. *${prefix}surah*
Mengirim surah Al-Qur'an.
Aliases: -
Usage: *${prefix}surah* nomor_surah

17. *${prefix}js*
Mengetahui jadwal shalat di daerah kalian
Aliases: - 
Usage: *${prefix}js* namadaerah

18. *${prefix}mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *${prefix}mutual*

19. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

20. *${prefix}play*
Play audio dari YouTube.
Aliases: - 
Usage: *${prefix}play* judul_video

21. *${prefix}sms*
Mengirim SMS secara anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix}sms* pesan | nomor_penerima

22. *${prefix}toxic*
Random toxic.
Aliases: -
Usage: *${prefix}toxic*

23. *${prefix}tafsir*
Tafsir ayat surah Al-Qur'an.
Aliases: -
Usage: *${prefix}tafsir* nama_surah  ayat

24. *${prefix}motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *${prefix}motivasi*

25. *${prefix}linesticker*
Sticker Line terbaru.
Aliases: *linestiker*
Usage: *${prefix}linesticker*

26. *${prefix}alkitab*
Al-Kitab search.
Aliases: -
Usage: *${prefix}* nama_injil

27. *${prefix}cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *${prefix}ongkir* kurir | asal | tujuan

28. *${prefix}movie*
Cari film.
Aliases: -
Usage: *${prefix}movie* judul

28. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

29. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

30. *${prefix}infohoax*
Cek update info hoax.
Aliases: -
Usage: *${prefix}infohoax*

31. *${prefix}trending*
Cek trending di Twitter.
Aliases: -
Usage: *${prefix}trending*

32. *${prefix}jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *${prefix}jobseek*

33. *${prefix}spamcall*
Spam call.
Aliases: -
Usage: *${prefix}spamcall* 812xxxxxxxx

34. *${prefix}spamsms*
Spam SMS.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx jumlah_pesan

35. *${prefix}email*
Mengirim email secara anonymous.
Aliases: -
Usage: *${prefix}email* email_target | subjek | pesan_email

36. *${prefix}quotes*
Random quotes bahasa indonesia.
Aliases: -
Usage: *${prefix}quotes*

37. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* nama_karakter

38. *${prefix}translate*
Terjemahkan teks.
Aliases: *trans*
Usage: *${prefix}translate* teks | kode_bahasa

39. *${prefix}hadis*
Info hadis.
Aliases: -
Usage: *${prefix}hadis* kitab_hadis | nomor_hadis

40. *${prefix}asmaulhusna*
Asmaul husna.
Aliases: -
Usage: *${prefix}asmaulhusna* nomor_asmaulhusna

41. *${prefix}randomquran*
Kirim surah Al-Qur'an secara random.
Aliases: -
Usage: *${prefix}randomquran*

42. *${prefix}coronavirus*
Cek kasus COVID-19.
Aliases: *corona*
Usage: *${prefix}coronavirus* negara

43. *${prefix}tomp3*
Format video ke MP3.
Aliases: -
Usage: Kirim video dengan caption *${prefix}tomp3* atau reply video dengan caption *${prefix}tomp3*.

44. *${prefix}ttp*
Buat teks menjadi stiker.
Aliases: -
Usage: *${prefix}ttp* teks

45. *${prefix}bass*
Bass boost, bikin telinga sakit.
Aliases: -
Usage: *${prefix}bass* tingkat_dB

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *${prefix}ttg* teks

4. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

5. *${prefix}emojisticker*
Konversi emoji ke stiker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

6. *${prefix}stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

7. *${prefix}stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

8. *${prefix}takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *${prefix}takestick* pack_name | author_name

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* judul_manga

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

9. *${prefix}anitoki*
Cek update terbaru Anitoki.
Aliases: -
Usage: *${prefix}anitoki*

10. *${prefix}neonime*
Cek update terbaru Neonime.
Aliases: -
Usage: *${prefix}neonime*

11. *${prefix}anoboy*
Cek on-going anime dari Anoboy.
Aliases: -
Usage: *${prefix}anoboy*

12. *${prefix}character*
Find Character from anime.
Alias: -
Usage: *{prefix}character* name_character

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}hartatahta*
Membuat gambar Harta Tahta Nama.
Aliases: -
Usage: *${prefix}hartatahta* nama

2. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *${prefix}partner* nama | pasangan

3. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

4. *${prefix}write*
Membuat catatan tulisan di buku.
Aliases: *nulis*
Usage: *${prefix}write* teks

5. *${prefix}glitchtext*
Membuat gambar teks glitch.
Aliases: *glitext*
Usage: *${prefix}glitchtext* teks1 | teks2

6. *${prefix}simi*
Chat SimiSimi.
Aliases: -
Usage: *${prefix}simi* teks

7. *${prefix}blackpink*
Membuat teks dengan style logo Blackpink.
Aliases: -
Usage: *${prefix}blackpink* teks

8. *${prefix}phmaker*
Membuat teks dengan style logo Pornhub.
Aliases: -
Usage: *${prefix}phmaker* teks_kiri | teks_kanan

9. *${prefix}galaxy*
Membuat gambar teks galaxy.
Aliases: -
Usage: *${prefix}galaxy* teks

10. *${prefix}tod*
Bermain truth or dare.
Aliases: -
Usage: *${prefix}tod*

11. *${prefix}weton*
Kirim ramalan weton.
Aliases: -
Usage: *${prefix}weton* tanggal | bulan | tahun

12. *${prefix}triggered*
Membuat efek triggered.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}triggered* atau reply pesan orang dengan *${prefix}triggered*.

13. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

14. *${prefix}asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *${prefix}asupan*

15. *${prefix}citacita*
Meme cita-cita.
Aliases: -
Usage: *${prefix}citacita*

16. *${prefix}phcomment*
Membuat capton ala PH comment.
Aliases: -
Usage: *${prefix}phcomment* username | teks

17. *${prefix}ffbanner*
Membuat banner Free Fire.
Aliases: -
Usage: *${prefix}ffbanner* teks1 | teks2

18. *${prefix}fflogo*
Membuat logo karakter Free Fire.
Aliases: -
Usage: *${prefix}fflogo* teks1 | teks2

19. *${prefix}neontext*
Membuat gambar neon teks.
Aliases: *neon*
Usage: *${prefix}neontext* teks_atas | teks_tengah | teks_bawah

20. *${prefix}firemaker*
Membuat gambar teks fire.
Aliases: -
Usage: *${prefix}firemaker* teks

21. *${prefix}mlmaker*
Membuat gambar karakter hero ML dengan teks.
Aliases: -
Usage: *${prefix}mlmaker* nama_hero | teks

22. *${prefix}balloonmaker*
Membuat gambar couple balloon.
Aliases: *blmaker*
Usage: *${prefix}balloonmaker* nama1 | nama2

23. *${prefix}sliding*
Membuat GIF sliding text.
Aliases: -
Usage: *${prefix}sliding* teks

24. *${prefix}wasted*
Membuat gambar wasted.
Aliases: -
Usage: Upload foto dengan caption *${prefix}wasted*

25. *${prefix}caklontong*
Bermain kuis caklontong.
Aliases: -
Usage: *${prefix}caklontong*

26. *${prefix}hilih*
Replace beberapa huruf menjadi i.
Aliases: -
Usage: *${prefix}hilih* teks

27. *${prefix}tebakgambar*
Bermain kuis tebak gambar.
Aliases: -
Usage: *${prefix}tebakgambar*

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mention semua member group.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

13. *${prefix}mutegc*
Set group hanya admin yang bisa mengirim pesan.
Aliases: -
Usage: *${prefix}mutegc* enabled/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

15. *${prefix}cersex*
Random cerita sex.
Aliases: -
Usage: *${prefix}cersex*

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

14. *${prefix}block*
Blok user.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

15. *${prefix}unblock*
Unblok user.
Aliases: *unblok*
Usage: *${prefix}unblock* @user/62812xxxxxxxx

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ LEVELING ]-----

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [10]_
    `
}
exports.harga = () => {
    return `
-----[ RULES ]-----

2k 1 hari
5k 7 hari
15k 30 hari

Pembayaran (gopay,shoppy,ovo,dana,Pulsa)

Order hanya lewat Instragram

https://instragram.com/indobotwa

    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan telepon bot.
Sanksi: *AUTO BLOCK*
*Yang Rugi Loh Sendiri*

2. Berkata Kasar
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
