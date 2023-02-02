import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import shapka from './AfterAuthImgs/shapka.png';
import vecboy from './AfterAuthImgs/vectorBoy.png';
import admin from './AfterAuthImgs/admin.png';
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


export default function AfterAuthPage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  // const fetchUserName = async () => {
  //   try {
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/home");
    //fetchUserName();
  }, [user, loading]);

  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value:string) =>{
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
    <div id='top_profile'>
      <div id='topgradient'style={{width:'80%', height:'100%', paddingLeft:'50px',paddingTop:'20px'}}>
        <img style={{width:'180px'}} src={shapka}/>
         </div>
    </div>
    <div id='innerDivProfile'>
      <MDBRow style={{width:'70%'}}>
        <MDBCol size='4'>
          <MDBTabs style={{marginTop:'20px'}} className='flex-column text-center'>
            
            <MDBTabsItem>
              <MDBTabsLink className='tabitm' onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>

                Особистій кабінет
              </MDBTabsLink>

            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className='tabitm'  onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Календар
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className='tabitm'  onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Документи
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className='tabitm'  onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab4'}>
                Новини
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink className='tabitm'  onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab4'}>
                Питання/Відповідь
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={logout} className='tabitm' style={{backgroundColor: "red"}}>
                Logout
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='8'>
          <MDBTabsContent>
            <MDBTabsPane style={{marginTop:'50px', marginLeft:'90px'}} show={verticalActive === 'tab1'}>
              <h1 style={{fontWeight:'700', color:'black',fontSize:'45px'}}>Привіт, тебе вітає</h1>
              <h1 style={{fontWeight:'700', color:'black',fontSize:'45px'}}>FOP Helper!</h1>
              <p style={{fontSize:'17.5px', color:'black', marginTop:'20px', width:'410px'}}>Хочеш вести свого ФОП, але боїшся труднощів з
               податками?</p>
              <p style={{fontSize:'17px', color:'black', marginLeft:'30px', marginTop:'40px', width:'470px'}}>Вводь свої дані нижче, обирай групу ФОП та слідкуй за термінами сплати податків в нашому календарі. </p>
              <div class="input-group mb-3"id="grform">
  <div
    
    type="text"
    class="form-control"
    aria-label="Username"
    aria-describedby="basic-addon1"
    style={{borderRadius:'70px',fontSize:'14px',paddingLeft:'30px',backgroundColor:'#F4F4F4',border:'none', height:'100px',paddingTop:'15px',fontWeight:'500'}}
  >Тут ти також можеш знайти потрібні документи, ознайомлюватися з усіма новинами щодо твого ФОП та отримати відповіді на популярні питання. </div>
  
</div>

            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>Profile content</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>Messages content</MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
        
      </MDBRow>
      <div id='pngDivBoy'>
        <img style={{height:'900px', width:'450px', marginTop:'-55px'}} src={vecboy}/>
        </div>
      </div>
      <div id='profileComp'>
        <div id='nameCard' style={{width:'570px', height:'260px',paddingTop:'20px'}}>
          <h1 style={{fontWeight:'600'}}>Змінити ім'я</h1>
        <input style={{margin:'20px'}} placeholder="Ім'я" label="Ім'я" id='form1' type='text' />
        
        <button id="changeBtn" type="submit">Змінити</button>
        </div>
        <div id='nameCard1' style={{width:'500px', height:'260px',paddingTop:'20px'}}>
        <h1 style={{fontWeight:'600'}}>Змінити пошту</h1>
        <input id='frm' style={{margin:'20px'}} placeholder="Пошта" label='Пошта' id='form1' type='text' />
        <h1 style={{fontWeight:'600'}}>Змінити пароль</h1>
        <input id='frm' style={{margin:'20px'}} placeholder="Пароль" label='Пароль' id='form1' type='text' />
        <button id="changeBtn" type="submit">Змінити</button>

        </div>
          
      </div>
    </>
  );
}