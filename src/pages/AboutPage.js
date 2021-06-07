import React from 'react'
import styled from 'styled-components/macro'

import Backdrop from '../components/Backdrop'
import MiniDrawer from '../components/MiniDrawer'
import Title from '../components/Title'

import profileimg from '../assets/lotta.jpg'

const AboutPage = () => {

  return (
    <Main>
      <MiniDrawer>
        <Title
          title='OM'
        />
        <Container>
          <Backdrop
            flex='column'
            width='60vw'
          >
            <ProfileImg />
            <TitleText>
              Lotta Winkler
            </TitleText>
            <AboutText>
              Vem är jag? En dotter, en sökande ung kvinna som reste och plockade apelsiner, badade med Ingo i Florida, utforskade de grekiska öarna samt besökte Bolsjojteatern i Moskva
              m.m. En fästmö som blev en fru och sen en mamma till två nya världsmedborgare som nu har vuxit ur barnsängen och gör sina egna lärdomar och misstag samt lyckliga framsteg. Genom dem så kommer mina
              gener att leva vidare till nya medborgare som ska föra livets fana framåt. Nu kom jag nog lite ur spår... tillbaka till mig.
              Livet tog en vändning som den gör ibland och jag är nu gift med en annan man som har fört in mitt liv i lite andra banor.
            </AboutText>
            <AboutText>
              Men var kommer min skaparlust ifrån? Redan som liten virkade jag cigarettfodral till min mammas cigaretter. John Silver utan filter (hard stuff). Jag virkade kläder åt mina gosedjur och jag målade med vattenfärger hej vilt.
            </AboutText>
            <AboutText>
              Jag och några andra glada individer har även provat på att göra spiktavlor. Vad är det? Jo på glada 70-talet tror jag det var så slog man i små spikar i en platta och sen vevade man runt med en glimmande
              tråd. Mitt alster blev en fjäril. Finns kvar i min ägo, men ej på väggen. Batiken kom in i mitt liv och batiktröjornas period lyste upp min dag. Började även försöka sy kläder med mer eller mindre lyckade
              resultat. Minns min väst som jag aldrig bar.
            </AboutText>
            <AboutText>
              Ett år på Kävesta Estetlinje 83-84 förgyllde min vardag.
              Halmslöjd, oljemålning, luffarslöjd m.m. Varför gick jag där... jo, för att jag ville.
            </AboutText>
            <AboutText>
              -86 kom mitt första barn och -88 mitt andra. Mina kära barn fick bära hemstickade tröjor och även en overall som jag tryckt små konstiga djur på. Ett
              skidfodrall med tryckta figurer finns också i mitt bagage. Småbarnsåren - tiden rann iväg och så mycket egentid fanns inte att hitta. Men i mitt hjärta så fanns
              längtan kvar att skapa och göra något med mina händer. Jag uppskattade alltid mina barns teckningar, sugrörsgirlanger till granen och trolldegstroll. Tror mig ha
              uppmuntrat dem till att skapa både inom teckning, målning samt musik. Ibland gick jag någon korta kurser med keramik, tovning, m.m.
              Jag jobbade inom barnomsorgen länge och väl – tyckte om att vara i målarrummet med de små, se deras små alster växa fram.
            </AboutText>
            <AboutText>
              Cirka 2012 bytte jag bana. Jobbar fortfarande med människor, men äldre och med en annan problematik. Trivs bäst när jag får med mig några ner till hantverksrummet och ser hur de, trots olika hinder, kan skapa och få fram alster som är väl värda att njuta av.
            </AboutText>
            <AboutText>
              Nu tillbaka till mitt skapande. Är medlem i Örebro Slöjdförening och har varit med på en hel del av deras endagars "prova-på". Jag har varit med på Hälsomålningskurs och kommer att fortsätta med den. Jag har
              gått de första 17 stegen i Vedic Art. Så har jag av egen fri vilja börjat prova på att jobba med läder, tennbroderi, broderi, knyppling, luffarslöjd, korgflätning, trådslöjd, halmslöjd samt gjuter en del i cement.
              Testar och provar ofta med mer eller mindre perfekt utgång. Jag gör det för att jag tycker om att jobba med mina händer samt att jag är nyfiken och prova på olika tekniker.
              Mitt skapande är väl som med allt annat. Det går i perioder – ibland mer – ibland mindre. Ibland vill man mer än kroppen och knoppen orkar med.
            </AboutText>
            <TextBox>
              <ItalicText>
                Kommer den här sidan vara intressant för andra?
              </ItalicText>
              <ItalicText>
                Kommer den att utveckla någon annan?
              </ItalicText>
              <ItalicText>
                Kommer den att visa fantastiska underverk och nyskapande?
              </ItalicText>
            </TextBox>
            <AboutText>
              Kanske inte för alla, men för Dig som är som mig och vill testa och prova och göra något för din egen kreativitet kan det kanske vara en liten öppning. Vi ska inte vara rädda att prova nya saker och vi ska
              våga visa upp vad vi gör och vara stolta över vad våra egna händer kan framställa. Frambringa. Välkommen in och se några av mina alster. Ta dem som de är – nybörjarlust och skaparlust.
              Vi kan kanske hitta varandra, ni likasinnade vänner som vill prova, testa och misslyckas och lyckas med vad ni gör. 
            </AboutText>
            <EndText>
              Tänk att allt är ett steg framåt.
            </EndText>
          </Backdrop>
          </Container>
      </MiniDrawer>
    </Main>
  )
}

export default AboutPage

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  padding-bottom: 50px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProfileImg = styled.div`
  align-self: center;
  width: 120px;
  height: 120px;
  background-image: url(${profileimg});
  background-size: cover;
  overflow: hidden;
  border: solid #70731b 2px;
  border-radius: 50%;
  margin: 15px;
   @media (min-width: 768px) {
    width: 180px;
    height: 180px;
   }
`
const TitleText = styled.h2`
  font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
      padding: 0 10px;
    }
    @media (min-width: 1025px) {
      font-size: 22px;
      padding: 0 30px;
    }
`
const AboutText = styled.p`
  font-size: 14px;
  padding: 8px 0;
   @media (min-width: 768px) {
     font-size: 16px;
     padding: 10px;
   }
   @media (min-width: 1025px) {
    padding: 15px 30px;
  }
`
const TextBox = styled.div`
  padding: 10px 0;
    @media (min-width: 768px) {
      padding: 10px;
    }
    @media (min-width: 1025px) {
      padding: 15px 30px;
    }
`
const ItalicText = styled.p`
  font-size: 14px;
  font-style: italic;
   @media (min-width: 768px) {
     font-size: 16px;
   }
   @media (min-width: 1025px) {
  }

`
const EndText = styled.p`
  font-size: 16px;
  padding: 15px 0;
  font-style: italic;
  align-self: flex-end;
   @media (min-width: 768px) {
     font-size: 18px;
     padding: 10px;
   }
  @media (min-width: 1025px) {
    padding: 30px;
  }

`