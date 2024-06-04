import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Atv01 from "./Pages/Atv01";
import Atv02 from "./Pages/Atv02";
import Atv03 from "./Pages/Atv03";
import Atv04 from "./Pages/Atv04";
import BucketList from "./components/semana-4/BucketList";
import Counter from "./components/semana-4/Counter";
import CounterList from "./components/semana-4/CounterList";
import Form3 from "./components/semana-4/Form3";
import Form2 from "./components/semana-4/Form2";
import Form from "./components/semana-4/Form";
import Gallery from "./components/semana-4/Gallery";
import List from "./components/semana-4/List";
import List2 from "./components/semana-4/List2";
import List3 from "./components/semana-4/List3";
import List4 from "./components/semana-4/List4";
import MovingDot from "./components/semana-4/MovingDot";
import ShapeEditor from "./components/semana-4/ShapeEditor";
import Toolbar from "./components/semana-4/Toolbar";

import Atv05 from "./Pages/Atv05";
import Accordion from "./components/semana-5/Accordion";
import ContactList from "./components/semana-5/ContactList";
import Form1Atv5 from "./components/semana-5/Form1Atv5";
import Form2Atv5 from "./components/semana-5/Form2Atv5";
import Messenger from "./components/semana-5/Messenger";
import Chat from "./components/semana-5/Chat";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
                <Route path="/atv03" element={<Atv03 />} />
                <Route path="/atv04" element={<Atv04 />}>
                    <Route path="bucketlist" element={<BucketList />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="counterlist" element={<CounterList />} />
                    <Route path="form" element={<Form />} />
                    <Route path="form2" element={<Form2 />} />
                    <Route path="form3" element={<Form3 />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="list" element={<List />} />
                    <Route path="list2" element={<List2 />} />
                    <Route path="list3" element={<List3 />} />
                    <Route path="list4" element={<List4 />} />
                    <Route path="movingdot" element={<MovingDot />} />
                    <Route path="shapeeditor" element={<ShapeEditor />} />
                    <Route path="toolbar" element={<Toolbar />} />
                </Route>
                <Route path="/atv05" element={<Atv05 />}>
                    <Route path="accordion" element={< Accordion />} />
                    <Route path="chat" element={< Chat />} />
                    <Route path="contactlist" element={< ContactList />} />
                    <Route path="form1atv5" element={< Form1Atv5 />} />
                    <Route path="form2atv5" element={< Form2Atv5 />} />
                    <Route path="messenger" element={< Messenger />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
