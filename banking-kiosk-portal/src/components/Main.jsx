import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { Suspense, lazy } from "react";
const Login = lazy(() => import("./Login"))
const Home = lazy(() => import("./Home"))
const Dashboard = lazy(() => import("./Dashboard"))
const Accinfo = lazy(() => import("./Accinfo"))
const Banks = lazy(() => import("./Bank-services"))
const Loans = lazy(() => import("./Loans"))
const At = lazy(() => import("./Atmser"))
const Chkbook = lazy(() => import("./Chkbook"))
const Bill = lazy(() => import("./Bill"))
const Locker = lazy(() => import("./Locker"))
const Digi = lazy(() => import("./Digital"))
const Cust = lazy(() => import("./custsupport"))
const Locate = lazy(() => import("./Locateus"))
const Rules = lazy(() => import("./Rules"))
const Updates = lazy(() => import("./Updates"))
const Saving = lazy(() => import("./SavingAcc"))
const Recurr = lazy(() => import("./Recurring"))
const Fix = lazy(() => import("./Fixed"))
const Sal = lazy(() => import("./Salary"))
const Curr = lazy(() => import("./Current"))




export default function Main(props) {
    return (
        <Container bsPrefix="main">
            <Routes>
                <Route exact path="/" element={<Suspense fallback={
                    <div className="spinner-box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Dashboard /></Suspense>}></Route>

                {<Route exact path="/accinfo" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Accinfo /></Suspense>}></Route>}

                {<Route exact path="/bank-services" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Banks /></Suspense>}></Route>}

                {<Route exact path="/loans" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Loans /></Suspense>}></Route>}
                    
                    {<Route exact path="/atmser" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><At /></Suspense>}></Route>} 

                    {<Route exact path="/chkbook" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Chkbook /></Suspense>}></Route>} 

                    {<Route exact path="/bill" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Bill /></Suspense>}></Route>} 

                    {<Route exact path="/locker" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Locker /></Suspense>}></Route>} 

                    {<Route exact path="/digital" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Digi /></Suspense>}></Route>} 

                    {<Route exact path="/locateus" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Locate /></Suspense>}></Route>}

                    {<Route exact path="/custsupport" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Cust /></Suspense>}></Route>} 

                    
                    {<Route exact path="/rules" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Rules /></Suspense>}></Route>} 

                    {<Route exact path="/updates" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Updates /></Suspense>}></Route>} 

                    {<Route exact path="/savingAcc" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Saving /></Suspense>}></Route>} 

                    {<Route exact path="/Recurring" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Recurr /></Suspense>}></Route>} 

                    {<Route exact path="/fixed" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Fix /></Suspense>}></Route>} 

                    {<Route exact path="/salary" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Sal /></Suspense>}></Route>} 

                    {<Route exact path="/current" element={<Suspense fallback={
                    <div className="spinner=box">
                        <Spinner animation="border" className="spinner"></Spinner>
                    </div>}><Curr /></Suspense>}></Route>} 


                   



            </Routes>
        </Container>
    )
}
