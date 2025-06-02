export default function Artikeldetail() {
  return (
    <div className="card">
      <h1>KOBE BRAYNT</h1>
      <Gambar />
      <Like/>
      <UserCard
        nama="Kobe Braynt"
        lahir="23 Agustus 1978"
        meninggal="26 Januari 2020 (umur 41) Calabasas, California"
      />
      <Detail />
    </div>
  );
}
function Gambar() {
  return (
    <div>
      <center>
        <img
          src="https://d.newsweek.com/en/full/1563651/kobe-bryant.jpg?w=1200&f=4989801fc1412ecc6fff84cba4d29fc0"
          className="profile"
        />
      </center>
    </div>
  );
}
function UserCard(props) {
  return (
    <div>
      <hr />
      <h4>Nama: {props.nama}</h4>
      <h4>Lahir: {props.lahir}</h4>
      <h4>Meninggal: {props.meninggal}</h4>
    </div>
  );
}
import { useState } from 'react';

function Like() {
  const [uang1, setCount] = useState(0);
  return (
    <div>
      <span >Jumlah tap: {uang1}</span><br />
      <button onClick={() => setCount((prevUang) => prevUang + 1)}>
        Tap tap
      </button>
      <button onClick={() => setCount((prevUang) => prevUang - 1)}>
       Min Tap
      </button>
    </div>
  );
}
function Detail() {
  return (
    <div>
   
      <p>
        Kobe Bean Bryant (/ˈkoʊbiː/ 23 Agustus 1978 - 26 Januari 2020) adalah
        seorang pemain basket profesional Amerika Serikat. Bermain pada posisi
        shooting guard, Bryant menghabiskan seluruh 20 tahun karirnya dengan Los
        Angeles Lakers di National Basketball Association (NBA). Sering dianggap
        sebagai salah satu pemain basket terbaik sepanjang masa,[3][4][5][6]
        Bryant telah memenangkan lima gelar juara NBA, 18 kali All-Star, 15 kali
        All-NBA Team, 12 kali All-Defensive Team, NBA Most Valuable Player (MVP)
        tahun 2008, dan dua kali NBA Finals MVP. ia mencetak skor terbanyak di
        NBA selama dua musim, menduduki peringkat keempat pada daftar pencetak
        skor musim reguler terbanyak sepanjang masa dan keempat pada daftar
        pencetak skor playoff terbanyak sepanjang masa. Lahir di Philadelphia
        dan sebagian besar di Italia, ia dianggap sebagai pemain basket SMA
        terbaik di AS ketika dirinya masih bersekolah di Lower Merion High
        School di Pennsylvania. Putra mantan pemain NBA, Joe Bryant, ia
        mengikuti NBA Draft 1996 dan dipilih oleh Charlotte Hornets pada urutan
        ke-13. Hornets kemudian melakukan trade dan Kobe pindah ke Lakers.
        Sebagai rookie, Bryant mendapatkan reputasi sebagai high-flyer setelah
        memenangkan Slam Dunk Contest tahun 1997, dan dinobatkan sebagai
        All-Star pada musim keduanya. Meskipun adanya perselisihan dengan
        rekannya Shaquille O'Neal, mereka membawa Lakers merengkuh tiga gelar
        juara NBA beruntun sejak tahun 2000 hingga 2002. Pada tahun 2003, Bryant
        dituduh melakukan pelecehan seksual,[7] sebelum tuntutan pidana
        dibatalkan setelah sang penuduh menolak untuk bersaksi. Gugatan perdata
        kemudian diselesaikan di luar pengadilan. Bryant membantah tuduhan
        pelecehan tetapi mengaku mengalami keintiman seksual dan kemudian
        mengeluarkan permintaan maaf secara publik. Setelah Lakers kalah pada
        pertandingan Final NBA 2004, O'Neal di-trade ke Miami Heat dan Bryant
        menjadi pemain kunci bagi Lakers. Ia mencetak skor terbanyak di NBA
        selama musim 2005–2006 dan 2006–2007. Pada tahun 2006, ia mencetak 81
        poin yang merupakan capaian tertinggi sepanjang kariernya—poin terbanyak
        kedua yang dicetak dalam satu game dalam sejarah NBA, tepat di belakang
        Wilt Chamberlain yang mencetak 100 poin pada tahun 1962. Bryant membawa
        Lakers merebut dua gelar juara beruntun pada tahun 2009 dan 2010, dan
        mendapatkan penghargaan NBA Finals MVP pada dua kali final tersebut. Ia
        terus menjadi salah satu pemain top di liga hingga tahun 2013, ketika ia
        menderita robek tendon Achilles pada usia 34 tahun. Meskipun dirinya
        pulih dari cedera itu, ia menderita cedera akhir musim pada bagian lutut
        dan bahunya dalam dua musim berikutnya. Mengakui bahwa kondisi fisiknya
        mulai menurun, Bryant pensiun setelah musim 2015–2016. Ia menjadi
        pencetak skor terbanyak sepanjang masa dalam sejarah Lakers. Bryant
        adalah guard pertama dalam sejarah NBA yang bermain selama setidaknya 20
        musim. Penampilannya sebagai All-Star sebanyak 18 kali merupakan yang
        terbanyak kedua sepanjang masa, dan juga merupakan rekor penampilan
        secara beruntun terbanyak sebagai starter. Raihan empat NBA All-Star
        Game MVP menyamai Bob Pettit sebagai terbanyak dalam sejarah NBA. Ia
        memberi dirinya julukan "Black Mamba" pada pertengahan tahun 2000-an,
        dan julukan tersebut diadopsi secara luas oleh masyarakat umum. Pada
        Olimpiade Musim Panas 2008 dan 2012, ia memenangkan medali emas sebagai
        anggota tim nasional AS. Pada tahun 2018, Bryant memenangkan Academy
        Award untuk Film Pendek Animasi Terbaik untuk filmnya yang berjudul Dear
        Basketball.[8] Bryant meninggal, bersama putrinya Gianna dan tujuh
        lainnya, dalam kecelakaan helikopter di Calabasas, California.[9]
        Sejumlah tribut dan memorial kemudian diberikan, termasuk mengganti
        Penghargaan All-Star MVP untuk menghormatinya.
      </p>

    </div>
  );
}
