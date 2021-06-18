
const calculoTotal = () => {

    let totalValores = this.props.pasoBaseValoresSkus;
    let volumenTotal = 0;
    let pesoTotal = 0;
    let libraVolumenTotal = 0;
    let totalCajas = 0;
    const conversionCmInches = 0.393701;
    const factorPesoVolumen = 139;

    for (let i = 0; i < this.state.data.length; i++) {
        pesoTotal = pesoTotal + (this.state.data[i].kilos) * (this.state.data[i].cantidad) / (1000);
        volumenTotal = volumenTotal + (this.state.data[i].largo) * (this.state.data[i].ancho) * (this.state.data[i].alto) * (this.state.data[i].cantidad) / (1000000);
        libraVolumenTotal = libraVolumenTotal + (this.state.data[i].largo) * (this.state.data[i].ancho) * (this.state.data[i].alto) * (this.state.data[i].cantidad) * (conversionCmInches ** 3) / (factorPesoVolumen);
        totalCajas = totalCajas + this.state.data[i].cantidad
    }

    let KgVolBrazil = ((volumenTotal * 300) / 1000);
    let KgVolTerrestreBrazil = (pesoTotal >= KgVolBrazil) ? pesoTotal : KgVolBrazil;
    let shortCut = (KgVolTerrestreBrazil >= volumenTotal) ? KgVolTerrestreBrazil : volumenTotal;

    // ######### Primera Milla ###########

    let recogidaInicial = 96 * shortCut;
    let transferCost = (10 / 5.3) * shortCut;
    let seguro = 0.0012 * totalValores;
    let icms = 0.12 * (seguro + recogidaInicial);
    let tolls = 1.3 * ((KgVolTerrestreBrazil * 1000) / 100);
    let primeraMilla = (recogidaInicial + transferCost + seguro + icms + tolls)

    this.setState({ primeraMilla: primeraMilla });

    // ######### Costo de Exportacion #########

    const blFee = 40;
    const exportCustomsBroker = 226.4;
    const ams = 35;
    const vgm = 20;
    const desembarco = 103.77;

    let eff = 3 * shortCut;
    let capatazia = (20 / 5.3) * shortCut;
    let tec = capatazia;

    let recevingProcess = (35 / 5.3) * shortCut;

    recevingProcess = (recevingProcess < (80 / 5.3)) ? (80 / 5.3) : recevingProcess;

    let seguroExpo = 0.003 * totalValores;
    let costoExportacion = (exportCustomsBroker + blFee + ams + vgm + eff + capatazia + tec + desembarco + recevingProcess + seguroExpo);

    this.setState({ costoExportacion: costoExportacion });

    // ######### Sea Freight #########

    let oceanFreight = 35 * shortCut;
    let internationalInsurance = 0.018 * totalValores;
    let seaFreight = (oceanFreight + internationalInsurance);

    this.setState({ seaFreight: seaFreight });

    // ######### Plus Cargo Miami #########

    let thc = 25 * shortCut;
    thc = (thc < 25) ? 25 : thc;
    thc = (thc > 500) ? 500 : thc;

    let cfsLoading = (libraVolumenTotal / 100) * 4.55;
    cfsLoading = (cfsLoading < 75) ? 75 : cfsLoading;
    cfsLoading = (cfsLoading > 375) ? 375 : cfsLoading;

    const docFee = 55;
    const psf = 25;
    const dadFee = 30;
    const handlingPlusUsa = 110;

    let chassisFee = (3 * shortCut > 10) ? 3 * shortCut : 10;
    let terminalFuel = (((libraVolumenTotal / 800) * 2) > 10) ? ((libraVolumenTotal / 800) * 2) : 10;

    let plusCargoMiami = (docFee + psf + dadFee + handlingPlusUsa + chassisFee + terminalFuel + thc + cfsLoading);

    this.setState({ plusCargoMiami: plusCargoMiami });

    // ######### Costos Import IBC USA #########

    let totalLineas = this.props.pasoBaseUnidadesSkus;
    let UsCustomsFee = (totalLineas < 6) ? 60 : (60 + 2 * totalLineas);
    let UsCustomsBond = (3.5 * ((totalValores * 3) / 1000)) < 35 ? 35 : (3.5 * ((totalValores * 3) / 1000));
    let CargoProcessingFee = (0.34 * totalValores / 100) < 25 ? 25 : (0.34 * totalValores / 100);
    const OtherFedAgentsFee = 40;
    let burningBridges = ((volumenTotal * 1000000) / 5000) * 0.1 > (pesoTotal * 0.1) ? ((volumenTotal * 1000000) / 5000) * 0.1 : (pesoTotal * 0.1);
    let PickUpPortIBC = burningBridges < 35 ? 35 : burningBridges;
    const ImportFee = 100;
    let HandlingMia = 2 * totalCajas < 20 ? 20 : totalCajas;
    const FreeDomicileFee = 15;

    let costosImportIbcUsa = (UsCustomsFee + UsCustomsBond + CargoProcessingFee + OtherFedAgentsFee + PickUpPortIBC + ImportFee + HandlingMia + FreeDomicileFee);

}