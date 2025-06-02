export default function HelloWorld() {
  const propsUserCard = {
    nama: "Goku",
    nim: "999999",
    tanggal: "2025-01-01",
  };
  const gambar1 = {
    gambar: <img src="https://www.gifcen.com/wp-content/uploads/2022/01/wallpaper-gif-9.gif" alt="W3Schools.com" className="profile"/> 
  };
  return (
    <div>
       <Gambar gambar={gambar1.gambar}/>
      <h1>Hello World</h1>
      <p>Selamat Belajar ReactJs</p>
      <GreetingBinjai />
      <UserCard
        nama="Irfan"
        nim="2355301136"
        tanggal={new Date().toLocaleDateString()} />
         
         <Uang/>
      <UserCard {...propsUserCard} />
      
      <QuoteText />
     
     
    </div>
  );
}

function GreetingBinjai() {
  return <small>Salam dari Binjai</small>;

}

function Gambar(props){
  return (
<div>
 {props.gambar}
</div>

  );
}


function QuoteText() {
  const text = "Mulutmu Harimaumu";
  const text2 = "Aku ingin jadi macan";
  return (
    <div>
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}
function UserCard(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
}
function Table(){
  return(
    <table>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
    </table>
  )
}
import { useState } from 'react';

function Uang() {
  const [uang1, setCount] = useState(0);
  return (
    <div>
      <p >Uang: {uang1}</p>
      <button onClick={() => setCount((prevUang) => prevUang + 100)}>
        Tambah Uang
      </button>
      <button onClick={() => setCount((prevUang) => prevUang - 100)}>
        kurangi Uang
      </button>
    </div>
  );
}

