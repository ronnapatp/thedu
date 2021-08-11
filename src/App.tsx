import React, { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">

      <div className="typewriter">
        <p>การศึกษาไทยเท่าที่เล่าได้</p>
      </div>

        <p>
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            กดเพื่อศึกษาต่อ
          </a>
        </p>
      </header>
      <div className="App-header" id="intro">
        <div>
          <h1>รู้จักการศึกษาไทย</h1>
          <div className="intro">
          การศึกษาของไทย เป็นการ​ศึกษา​ที่จัดโดย<a href="" className="App-link">กระทรวงศึกษาธิการ</a> 
          โดยภาครัฐจะเข้ามาดูแลโดยตรงและเปิดโอกาสให้เอกชนมีส่วนร่วมในการศึกษาตั้งแต่ระดับการศึกษาปฐมวัยจนถึงระดับอุดมศึกษา 
          สำหรับการศึกษาภาคบังคับในประเทศไทยนั้นได้กำหนดให้พลเมืองไทยต้อง<b className="intro2">“จบการศึกษาอย่างน้อยที่สุดในระดับชั้นมัธยมศึกษาตอนต้น 
          และต้องเข้ารับการศึกษาอย่างช้าสุดเมื่ออายุ 7 ปี” </b> ซึ่งการศึกษาภาคบังคับนี้เป็นส่วนหนึ่งของการศึกษาขั้นพื้นฐานตามหลักสูตรของกระทรวงศึกษาธิการ
          </div> <br />
          <a
            className="button button1"
            href=""
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#ระดับชั้นในการศึกษาไทย"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="ระดับชั้นในการศึกษาไทย">
        <div>
          <h1>ระดับชั้นในการศึกษาไทย</h1>
          <div>
            ในการศึกษาไทยเเบ่งการศึกษาออกเป็น 2 สาย คือ<b>สายสามัญ</b>เเละ<b>สายอาชีพ</b> <br />
            กดเพื่อเลือกสายที่ต้องการศึกษา <br />
            <a href="#สายสามัญ" className="App-link">สายสามัญ</a>
            {' | '}
            <a href="#สายอาชีพ" className="App-link">สายอาชีพ</a>
          </div>
           <br />
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#เครื่องแบบ"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="สายสามัญ">
        <div>
          <h1>สายสามัญ</h1>
          <div>
            สายสามัญจะเป็นการริ่มเรียนตั้งเเต่อนุบาลจนไปถึงปริญญาเองเเต่ไม่ได้บังคัฐว่าต้องจบปริญญาเองเเต่บังคับว่า <br />
            <p className="intro2"><b>“เด็กไทยต้องจบการศึกษาอย่างน้อยที่สุดในระดับชั้นมัธยมศึกษาตอนต้น <br />
          และต้องเข้ารับการศึกษาอย่างช้าสุดเมื่ออายุ 7 ปี”</b></p>
          <table>
          <tr>
              <th>การศึกษา</th>
              <th>ช่วงอายุ</th>
              <th>การศึกษา</th>
              <th>ช่วงอายุ</th>
              </tr>
              <tr>
              <td>เตรียมอนุบาล</td>
              <td>2-3ปี</td>
              <td>บัณฑิตปี 1-6</td>
             <td>-ปี</td>
              </tr>
              <tr>
              <td>อนุบาล</td>
              <td>3-5ปี</td>
              <td>ปริญญาตรี</td>
             <td>-ปี</td>
              </tr>
             <tr>
             <td>ประถมศึกษา 1-6</td>
             <td>6-12ปี</td>
             <td>ปริญญาโท</td>
             <td>-ปี</td>
             </tr>
             <tr>
             <td>มัธยมศึกษา 1-6</td>
             <td>12-18</td>
             <td>ปริญญาเอก</td>
             <td>-ปี</td>
             </tr>
            </table>
            <br />
            <a href="#สายอาชีพ" className="App-link">คลิกเพื่อดูสายอาชีพ</a>
          </div>
           <br />
          <a
            className="button button1"
            href="#ระดับชั้นในการศึกษาไทย"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="สายอาชีพ">
        <div>
          <h1>สายอาชีพ</h1>
          <div>
            สายอาชีพจะเป็นการเริ่มเรียนตั้งเเต่อายุ 15ปี โดย <br />
            <p className="intro2"><b>“เด็กไทยต้องจบการศึกษาอย่างน้อยที่สุดในระดับชั้นมัธยมศึกษาตอนต้น <br />
          และต้องเข้ารับการศึกษาอย่างช้าสุดเมื่ออายุ 7 ปี”</b></p>
          <table>
          <tr>
              <th>การศึกษา</th>
              <th>ช่วงอายุ</th>
              <th>การศึกษา</th>
              <th>ช่วงอายุ</th>
              </tr>
              <tr>
              <td>ประกาศนียบัตรวิชาชีพปี 1-3</td>
              <td>15-18ปี</td>
              <td>ปริญญาตรี</td>
             <td>-ปี</td>
              </tr>
              <tr>
              <td>อนุปริญญาปี 1-2</td>
              <td>-ปี</td>
              <td>ปริญญาโท</td>
             <td>-ปี</td>
              </tr>
             <tr>
             <td>ต่อเนื่อง 1-4</td>
             <td>-ปี</td>
             <td>ปริญญาเอก</td>
             <td>-ปี</td>
             </tr>

            </table>
            <br />
            <a href="#สายสามัญ" className="App-link">คลิกเพื่อดูสายสามัญ</a>
          </div>
           <br />
          <a
            className="button button1"
            href="#ระดับชั้นในการศึกษาไทย"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="เครื่องแบบ">
        <div>
          <h1>เครื่องแบบนักเรียนไทย</h1>
          <div className="intro">
            เครื่องแบบนักเรียนในไทยถือเป็นรูปแบบของเครื่องเเต่งกายตั้งเเต่ อนุบาล ประถมศึกษา และมัธยมศึกษา รวมถึงมหาลัยด้วย โดยตั้งขึ้นตามพระราชบัญญัติการศึกษาแห่งชาติ พ.ศ. 2542 ที่กำหนดไว้ในพระราชบัญญัติเครื่องแบบนักเรียน พ.ศ. 2551 ประกอบกับระเบียบปฏิบัติของโรงเรียนต่าง ๆ เอง
            <br />ซึ่งในช่วง1-2ปีที่ผ่านมาก็ได้มีการมาเคลื่อนไหวเกี่ยวกับการบังคับใส่ชุดนักเรียนโดย<a href="https://www.facebook.com/Badstudent.th" target="_blank" className="App-link">นักเรียนเลว</a>เเละกลุ่มอื่นๆ ซึ่งมองว่า
            <p className="intro2"><b>“การบังคับนักเรียนใส่ชุดนักเรียนเป็นการจำกัดสิทธิเสรีภาพ <br /> เป็นกฎที่ล้าหลังเเละไม่ทันกับยุคสมัย”</b></p>
            <p>ซึ่งในปัจจุบันก็ยังไม่ได้มีการประกาศยกเลิกการบังคับใส่ชุดนักเรียนออกมาจากกระทรวงศึกษาธิการ</p>
            <iframe  width="320" height="180" src="https://www.youtube.com/embed/rkRXEBsja8M"></iframe> 
                      </div>
           <br />
          <a
            className="button button1"
            href="#ระดับชั้นในการศึกษาไทย"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#ทรงผม"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="ทรงผม">
        <div>
          <h1>ทรงผมนักเรียนไทย</h1>
          <div className="intro">
          ทรงผมนักเรียนในไทยถือเป็นรูปแบบทรงผมที่มีการบังคับใช้มานานเเล้ว ซึ่งในช่วง1-2ปีที่ผ่านมาก็ได้มีการมาเคลื่อนไหวเกี่ยวกับการบังคับเรื่องทรงผมโดย<a href="https://www.facebook.com/Badstudent.th" target="_blank" className="App-link">นักเรียนเลว</a>เเละกลุ่มอื่นๆ ก็ได้ออกมาเรียกร้องให้ศธ.ยกเลิกกฎนี้ <br /> โดยเมื่อวันที่ 14 พฤษภาคม 2556 รมว.ศธ.ได้ลงนามในร่างกฎกระทรวงกำหนดความประพฤติ การแต่งกาย และแบบทรงผมของนักเรียนนักศึกษา โดยสาระสำคัญของร่างกฎกระทรวงฉบับใหม่นี้ เปิดช่องให้นักเรียนชายไว้ทรงผมรองทรงได้ โดยระบุว่า ให้
            <p className="intro2"><b>“นักเรียนชายให้ไว้ผมด้านข้างและด้านหลังยาวไม่เลยตีนผมหรือผมรองทรงก็ได้”</b></p>
            และให้นักเรียนหญิงสามารถเลือกไว้ทรงผมสั้นหรือยาวได้ โดยระบุว่า
            <p className="intro2"><b>“นักเรียนหญิงให้ไว้ผมสั้นหรือยาวก็ได้ กรณีไว้ยาวก็ให้รวบให้เรียบร้อย”</b></p>
          </div>
           <br />
          <a
            className="button button1"
            href="#เครื่องแบบ"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="ปัญหา">
        <div>
          <h1>“ปัญหาของการศึกษาไทย”</h1>
          <div className="intro">
          ทรงผมนักเรียนในไทยถือเป็นรูปแบบทรงผมที่มีการบังคับใช้มานานเเล้ว ซึ่งในช่วง1-2ปีที่ผ่านมาก็ได้มีการมาเคลื่อนไหวเกี่ยวกับการบังคับเรื่องทรโดย<a href="https://www.facebook.com/Badstudent.th" target="_blank" className="App-link">นักเรียนเลว</a>เเละกลุ่มอื่นๆ ก็ได้ออกมาเรียกร้องให้ศธ.ยกเลิกกฎนี้ <br /> โดยเมื่อวันที่ 14 พฤษภาคม 2556 รมว.ศธ.ได้ลงนามในร่างกฎกระทรวงกำหนดความประพฤติ การแต่งกาย และแบบทรงผมของนักเรียนนักศึกษา โดยสาระสำคัญของร่างกฎกระทรวงฉบับใหม่นี้ เปิดช่องให้นักเรียนชายไว้ทรงผมรองทรงได้ โดยระบุว่า ให้
            <p className="intro2"><b>“นักเรียนชายให้ไว้ผมด้านข้างและด้านหลังยาวไม่เลยตีนผมหรือผมรองทรงก็ได้”</b></p>
            และให้นักเรียนหญิงสามารถเลือกไว้ทรงผมสั้นหรือยาวได้ โดยระบุว่า
            <p className="intro2"><b>“นักเรียนหญิงให้ไว้ผมสั้นหรือยาวก็ได้ กรณีไว้ยาวก็ให้รวบให้เรียบร้อย”</b></p>
          </div>
           <br />
          <a
            className="button button1"
            href="#เครื่องแบบ"
            rel="noopener noreferrer"
          >
            ย้อนกลับ
          </a>
          <a
            className="button button1"
            href="#intro"
            rel="noopener noreferrer"
          >
            หน้าต่อไป
          </a>
        </div>
      </div>
      <div className="App-header" id="source">
        <div>
          <h1>Source</h1>
          <a href="https://th.wikipedia.org/wiki/การศึกษาในประเทศไทย" className="App-link" target="_blank">1. www.th.wikipedia.org/wiki/การศึกษาในประเทศไทย</a>
          <br /><a href="https://www.moe.go.th/ทรงผมนักเรียน-2" className="App-link" target="_blank">2. www.moe.go.th/ทรงผมนักเรียน-2</a>

        </div>
      </div>
      <footer>
        <p className="ftleft">2021COPYRIGHT</p>
        <p className="ftright"><a href="" className="App-link">source</a></p>
      </footer>
    </div>
  )
}

export default App
