import React, { Component } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Footer from '../components/Footer';

class Index extends Component {

  render() {
    return (
        <div>
          <Head>
            <title>Mohammadreza Dehghani</title>
          </Head>
          <Navbar />
          <Header />
          <Hero />
          <Skills />
          <Services />
          <Footer />
        </div>
    );
  }
}

export default Index;