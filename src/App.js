import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Menu from './menu/menu';
import Hero from './hero/hero';
import HomePage from './Homepage/Homepage';
import Footer from './footer/footer';
import AboutPage from './Aboutpage/Aboutpage';
import LoginPage from './LoginPage/LoginPage';
import { useEffect, useState } from 'react';

import Charts from './Charts/Charts';
import axios from 'axios';

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import Chartd from './Chartd/Chartd';

Chart.register(ArcElement, Tooltip, Legend);

const baseUrl = "http://localhost:3000/budget"

function App() {
  const [dataSource, setDataSource] = React.useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#0ac360',
          '#4d5791',
          '#58595b',
        ],
      }
    ],

    labels: []
  })

  const [dataSourceNew, setDataSourceNew] = React.useState([])

  React.useEffect(() => {
    axios.get(baseUrl)
      .then((res) => {
        setDataSourceNew(res.data.myBudget);
        setDataSource(
          {
            datasets: [
              {
                data: res.data.myBudget.map((v) => v.budget),
                backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#fd6b19',
                  '#0ac360',
                  '#4d5791',
                  '#58595b',
                ],
              }
            ],

            labels: res.data.myBudget.map((v) => v.title)
          }
        )
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!dataSource) return null;

  return (
    <Router>
      <Menu/>
      <Hero/>
      <div classname="mainContainer">
        <Routes>
        {/* <Switch> */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        {/* </Switch> */}
        </Routes>
      </div>
      <center>
        <Charts chartData={dataSource} />
        <Chartd d3JSdataSource={dataSourceNew} />
      </center>
      <Footer/>
    </Router>
  );
}

export default App;