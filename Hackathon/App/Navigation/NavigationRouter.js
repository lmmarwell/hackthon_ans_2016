// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

import TelaPrincipal from '../Containers/TelaPrincipal'
import TelaWeb from '../Containers/TelaWeb'
import PrazosProcedimentos from '../Containers/PrazosProcedimentos'

import BuscaPrazos from '../Containers/BuscaPrazos'
import BuscaQualidade from '../Containers/BuscaQualidade'

import PrazoDetalhado from '../Containers/PrazoDetalhado'
import QualidadeDetalhada from '../Containers/QualidadeDetalhada'

import FazerReclamacao from '../Containers/FazerReclamacao';
import ReclamarAns from '../Containers/ReclamarAns';
import ReclamarReclameAqui from '../Containers/ReclamarReclameAqui';
import ReclamarOuvidorias from '../Containers/ReclamarOuvidorias';

import BuscaPlanos from '../Containers/BuscaPlanos';
import DetalhaPlano from '../Containers/DetalhaPlano';
import EscolheFaixaEtaria from '../Containers/EscolheFaixaEtaria';
import EscolheHospital from '../Containers/EscolheHospital';
import EscolheLimiteValor from '../Containers/EscolheLimiteValor';

import MeuPlano from '../Containers/MeuPlano';
import TipoEmergencia from '../Containers/TipoEmergencia';
import Emergencia from '../Containers/Emergencia';


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>


            <Scene initial key='telaPrincipal' component={TelaPrincipal} title='ANS +Simples' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='prazosProcedimentos' component={PrazosProcedimentos} title='Prazos de Procedimentos' />
            <Scene key='buscaPrazosProcedimentos' component={BuscaPrazos} title='Procedimentos' />
            <Scene key='prazoDetalhado' component={PrazoDetalhado} title='Prazo Detalhado'  />
            <Scene key='buscaQualidade' component={BuscaQualidade} title='Operadoras' />
            <Scene key='qualidadeDetalhada' component={QualidadeDetalhada} title='Reputação Operadora'  />
            <Scene key='telaWeb' component={TelaWeb} title='Reclame AQUI'  />

            <Scene key='fazerReclamacao' component={FazerReclamacao} title='Envie sua Reclamação'  />
            <Scene key='reclamarAns' component={ReclamarAns} title='Reclamação na ANS'  />
            <Scene key='reclamarReclameAqui' component={ReclamarReclameAqui} title='Reclame AQUI'  />
            <Scene key='reclamarOuvidorias' component={ReclamarOuvidorias} title='Ouvidorias'  />

            <Scene key='buscaPlanos' component={BuscaPlanos} title='Planos'  />
            <Scene key='detalhaPlano' component={DetalhaPlano} title='Plano Detalhado'  />
            <Scene key='escolheFaixaEtaria' component={EscolheFaixaEtaria} title='Faixa Etária'  />
            <Scene key='escolheHospital' component={EscolheHospital} title='Hospital'  />
            <Scene key='escolheLimiteValor' component={EscolheLimiteValor} title='Limite Valor'  />

            <Scene key='meuPlano' component={MeuPlano} title='Meu Plano'  />
            <Scene key='tipoEmergencia' component={TipoEmergencia} title='Tipo da Emergência'  />
            <Scene key='emergencia' component={Emergencia} title='Emergência'  />


            <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' component={MapviewExample} title='Rede Credenciada' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />

            {/* Custom navigation bar example */}
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />



          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
