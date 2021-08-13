var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Modelodeelevacion_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Modelo de elevacion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Modelodeelevacion_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8787392.829467, -163855.194417, -8742612.789023, -123532.946206]
                            })
                        });
var format_Limitecanton_2 = new ol.format.GeoJSON();
var features_Limitecanton_2 = format_Limitecanton_2.readFeatures(json_Limitecanton_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecanton_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecanton_2.addFeatures(features_Limitecanton_2);
var lyr_Limitecanton_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitecanton_2, 
                style: style_Limitecanton_2,
                interactive: true,
                title: '<img src="styles/legend/Limitecanton_2.png" /> Limite canton'
            });
var format_Caracteristicasdelterreno_3 = new ol.format.GeoJSON();
var features_Caracteristicasdelterreno_3 = format_Caracteristicasdelterreno_3.readFeatures(json_Caracteristicasdelterreno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caracteristicasdelterreno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caracteristicasdelterreno_3.addFeatures(features_Caracteristicasdelterreno_3);
var lyr_Caracteristicasdelterreno_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caracteristicasdelterreno_3, 
                style: style_Caracteristicasdelterreno_3,
                interactive: true,
                title: '<img src="styles/legend/Caracteristicasdelterreno_3.png" /> Caracteristicas del terreno'
            });
var format_Cienagas_4 = new ol.format.GeoJSON();
var features_Cienagas_4 = format_Cienagas_4.readFeatures(json_Cienagas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cienagas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cienagas_4.addFeatures(features_Cienagas_4);
var lyr_Cienagas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cienagas_4, 
                style: style_Cienagas_4,
                interactive: true,
                title: '<img src="styles/legend/Cienagas_4.png" /> Cienagas'
            });
var format_lagunasylagos_5 = new ol.format.GeoJSON();
var features_lagunasylagos_5 = format_lagunasylagos_5.readFeatures(json_lagunasylagos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagunasylagos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagunasylagos_5.addFeatures(features_lagunasylagos_5);
var lyr_lagunasylagos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagunasylagos_5, 
                style: style_lagunasylagos_5,
                interactive: true,
                title: '<img src="styles/legend/lagunasylagos_5.png" /> lagunas y lagos'
            });
var format_Estratorocoso_6 = new ol.format.GeoJSON();
var features_Estratorocoso_6 = format_Estratorocoso_6.readFeatures(json_Estratorocoso_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estratorocoso_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estratorocoso_6.addFeatures(features_Estratorocoso_6);
var lyr_Estratorocoso_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estratorocoso_6, 
                style: style_Estratorocoso_6,
                interactive: true,
                title: '<img src="styles/legend/Estratorocoso_6.png" /> Estrato rocoso'
            });
var format_Cementerio_7 = new ol.format.GeoJSON();
var features_Cementerio_7 = format_Cementerio_7.readFeatures(json_Cementerio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementerio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerio_7.addFeatures(features_Cementerio_7);
var lyr_Cementerio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cementerio_7, 
                style: style_Cementerio_7,
                interactive: true,
                title: '<img src="styles/legend/Cementerio_7.png" /> Cementerio'
            });
var format_Instalciondeportiva_8 = new ol.format.GeoJSON();
var features_Instalciondeportiva_8 = format_Instalciondeportiva_8.readFeatures(json_Instalciondeportiva_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Instalciondeportiva_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Instalciondeportiva_8.addFeatures(features_Instalciondeportiva_8);
var lyr_Instalciondeportiva_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Instalciondeportiva_8, 
                style: style_Instalciondeportiva_8,
                interactive: true,
                title: '<img src="styles/legend/Instalciondeportiva_8.png" /> Instalcion deportiva'
            });
var format_Canterasuperficial_9 = new ol.format.GeoJSON();
var features_Canterasuperficial_9 = format_Canterasuperficial_9.readFeatures(json_Canterasuperficial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canterasuperficial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canterasuperficial_9.addFeatures(features_Canterasuperficial_9);
var lyr_Canterasuperficial_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canterasuperficial_9, 
                style: style_Canterasuperficial_9,
                interactive: true,
                title: '<img src="styles/legend/Canterasuperficial_9.png" /> Cantera superficial'
            });
var format_Lienasdetransmision_10 = new ol.format.GeoJSON();
var features_Lienasdetransmision_10 = format_Lienasdetransmision_10.readFeatures(json_Lienasdetransmision_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lienasdetransmision_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lienasdetransmision_10.addFeatures(features_Lienasdetransmision_10);
var lyr_Lienasdetransmision_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lienasdetransmision_10, 
                style: style_Lienasdetransmision_10,
                interactive: true,
                title: '<img src="styles/legend/Lienasdetransmision_10.png" /> Lienas de transmision'
            });
var format_Lineasdetren_11 = new ol.format.GeoJSON();
var features_Lineasdetren_11 = format_Lineasdetren_11.readFeatures(json_Lineasdetren_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineasdetren_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineasdetren_11.addFeatures(features_Lineasdetren_11);
var lyr_Lineasdetren_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lineasdetren_11, 
                style: style_Lineasdetren_11,
                interactive: true,
                title: '<img src="styles/legend/Lineasdetren_11.png" /> Lineas de tren'
            });
var format_Muros_12 = new ol.format.GeoJSON();
var features_Muros_12 = format_Muros_12.readFeatures(json_Muros_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muros_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Muros_12.addFeatures(features_Muros_12);
var lyr_Muros_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muros_12, 
                style: style_Muros_12,
                interactive: true,
                title: '<img src="styles/legend/Muros_12.png" /> Muros'
            });
var format_Pistadeaterrizaje_13 = new ol.format.GeoJSON();
var features_Pistadeaterrizaje_13 = format_Pistadeaterrizaje_13.readFeatures(json_Pistadeaterrizaje_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistadeaterrizaje_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistadeaterrizaje_13.addFeatures(features_Pistadeaterrizaje_13);
var lyr_Pistadeaterrizaje_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pistadeaterrizaje_13, 
                style: style_Pistadeaterrizaje_13,
                interactive: true,
                title: '<img src="styles/legend/Pistadeaterrizaje_13.png" /> Pista de aterrizaje'
            });
var format_Puentesegundoorden_14 = new ol.format.GeoJSON();
var features_Puentesegundoorden_14 = format_Puentesegundoorden_14.readFeatures(json_Puentesegundoorden_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puentesegundoorden_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puentesegundoorden_14.addFeatures(features_Puentesegundoorden_14);
var lyr_Puentesegundoorden_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puentesegundoorden_14, 
                style: style_Puentesegundoorden_14,
                interactive: true,
                title: '<img src="styles/legend/Puentesegundoorden_14.png" /> Puente segundo orden'
            });
var format_Cercas_15 = new ol.format.GeoJSON();
var features_Cercas_15 = format_Cercas_15.readFeatures(json_Cercas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercas_15.addFeatures(features_Cercas_15);
var lyr_Cercas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cercas_15, 
                style: style_Cercas_15,
                interactive: true,
                title: '<img src="styles/legend/Cercas_15.png" /> Cercas'
            });
var format_Acueducto_16 = new ol.format.GeoJSON();
var features_Acueducto_16 = format_Acueducto_16.readFeatures(json_Acueducto_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acueducto_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acueducto_16.addFeatures(features_Acueducto_16);
var lyr_Acueducto_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acueducto_16, 
                style: style_Acueducto_16,
                interactive: true,
                title: '<img src="styles/legend/Acueducto_16.png" /> Acueducto'
            });
var format_Curvasdenivel_17 = new ol.format.GeoJSON();
var features_Curvasdenivel_17 = format_Curvasdenivel_17.readFeatures(json_Curvasdenivel_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_17.addFeatures(features_Curvasdenivel_17);
var lyr_Curvasdenivel_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_17, 
                style: style_Curvasdenivel_17,
                interactive: true,
                title: '<img src="styles/legend/Curvasdenivel_17.png" /> Curvas de nivel'
            });
var format_Vias_18 = new ol.format.GeoJSON();
var features_Vias_18 = format_Vias_18.readFeatures(json_Vias_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_18.addFeatures(features_Vias_18);
var lyr_Vias_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_18, 
                style: style_Vias_18,
                interactive: true,
                title: '<img src="styles/legend/Vias_18.png" /> Vias'
            });
var format_Nombrepoblados_19 = new ol.format.GeoJSON();
var features_Nombrepoblados_19 = format_Nombrepoblados_19.readFeatures(json_Nombrepoblados_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombrepoblados_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombrepoblados_19.addFeatures(features_Nombrepoblados_19);
var lyr_Nombrepoblados_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nombrepoblados_19, 
                style: style_Nombrepoblados_19,
                interactive: true,
                title: '<img src="styles/legend/Nombrepoblados_19.png" /> Nombre poblados'
            });
var format_Poblados_20 = new ol.format.GeoJSON();
var features_Poblados_20 = format_Poblados_20.readFeatures(json_Poblados_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblados_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblados_20.addFeatures(features_Poblados_20);
var lyr_Poblados_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblados_20, 
                style: style_Poblados_20,
                interactive: true,
                title: '<img src="styles/legend/Poblados_20.png" /> Poblados'
            });
var format_Puenteprimerorden_21 = new ol.format.GeoJSON();
var features_Puenteprimerorden_21 = format_Puenteprimerorden_21.readFeatures(json_Puenteprimerorden_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puenteprimerorden_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puenteprimerorden_21.addFeatures(features_Puenteprimerorden_21);
var lyr_Puenteprimerorden_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puenteprimerorden_21, 
                style: style_Puenteprimerorden_21,
                interactive: true,
                title: '<img src="styles/legend/Puenteprimerorden_21.png" /> Puente primer orden'
            });
var format_Puntoacotado_22 = new ol.format.GeoJSON();
var features_Puntoacotado_22 = format_Puntoacotado_22.readFeatures(json_Puntoacotado_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntoacotado_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntoacotado_22.addFeatures(features_Puntoacotado_22);
var lyr_Puntoacotado_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntoacotado_22, 
                style: style_Puntoacotado_22,
                interactive: true,
                title: '<img src="styles/legend/Puntoacotado_22.png" /> Punto acotado'
            });
var format_Puntodesvanecido_23 = new ol.format.GeoJSON();
var features_Puntodesvanecido_23 = format_Puntodesvanecido_23.readFeatures(json_Puntodesvanecido_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntodesvanecido_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntodesvanecido_23.addFeatures(features_Puntodesvanecido_23);
var lyr_Puntodesvanecido_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntodesvanecido_23, 
                style: style_Puntodesvanecido_23,
                interactive: true,
                title: '<img src="styles/legend/Puntodesvanecido_23.png" /> Punto desvanecido'
            });
var format_Lagunasylagos_24 = new ol.format.GeoJSON();
var features_Lagunasylagos_24 = format_Lagunasylagos_24.readFeatures(json_Lagunasylagos_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagunasylagos_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagunasylagos_24.addFeatures(features_Lagunasylagos_24);
var lyr_Lagunasylagos_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagunasylagos_24, 
                style: style_Lagunasylagos_24,
                interactive: true,
                title: '<img src="styles/legend/Lagunasylagos_24.png" /> Lagunas y lagos'
            });
var format_Cantera_25 = new ol.format.GeoJSON();
var features_Cantera_25 = format_Cantera_25.readFeatures(json_Cantera_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantera_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantera_25.addFeatures(features_Cantera_25);
var lyr_Cantera_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cantera_25, 
                style: style_Cantera_25,
                interactive: true,
                title: '<img src="styles/legend/Cantera_25.png" /> Cantera'
            });
var format_Edificaciones_26 = new ol.format.GeoJSON();
var features_Edificaciones_26 = format_Edificaciones_26.readFeatures(json_Edificaciones_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificaciones_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificaciones_26.addFeatures(features_Edificaciones_26);
var lyr_Edificaciones_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Edificaciones_26, 
                style: style_Edificaciones_26,
                interactive: true,
                title: '<img src="styles/legend/Edificaciones_26.png" /> Edificaciones'
            });

lyr_MapaBase_0.setVisible(true);lyr_Modelodeelevacion_1.setVisible(true);lyr_Limitecanton_2.setVisible(true);lyr_Caracteristicasdelterreno_3.setVisible(true);lyr_Cienagas_4.setVisible(true);lyr_lagunasylagos_5.setVisible(true);lyr_Estratorocoso_6.setVisible(true);lyr_Cementerio_7.setVisible(true);lyr_Instalciondeportiva_8.setVisible(true);lyr_Canterasuperficial_9.setVisible(true);lyr_Lienasdetransmision_10.setVisible(true);lyr_Lineasdetren_11.setVisible(true);lyr_Muros_12.setVisible(true);lyr_Pistadeaterrizaje_13.setVisible(true);lyr_Puentesegundoorden_14.setVisible(true);lyr_Cercas_15.setVisible(true);lyr_Acueducto_16.setVisible(true);lyr_Curvasdenivel_17.setVisible(true);lyr_Vias_18.setVisible(true);lyr_Nombrepoblados_19.setVisible(true);lyr_Poblados_20.setVisible(true);lyr_Puenteprimerorden_21.setVisible(true);lyr_Puntoacotado_22.setVisible(true);lyr_Puntodesvanecido_23.setVisible(true);lyr_Lagunasylagos_24.setVisible(true);lyr_Cantera_25.setVisible(true);lyr_Edificaciones_26.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_Modelodeelevacion_1,lyr_Limitecanton_2,lyr_Caracteristicasdelterreno_3,lyr_Cienagas_4,lyr_lagunasylagos_5,lyr_Estratorocoso_6,lyr_Cementerio_7,lyr_Instalciondeportiva_8,lyr_Canterasuperficial_9,lyr_Lienasdetransmision_10,lyr_Lineasdetren_11,lyr_Muros_12,lyr_Pistadeaterrizaje_13,lyr_Puentesegundoorden_14,lyr_Cercas_15,lyr_Acueducto_16,lyr_Curvasdenivel_17,lyr_Vias_18,lyr_Nombrepoblados_19,lyr_Poblados_20,lyr_Puenteprimerorden_21,lyr_Puntoacotado_22,lyr_Puntodesvanecido_23,lyr_Lagunasylagos_24,lyr_Cantera_25,lyr_Edificaciones_26];
lyr_Limitecanton_2.set('fieldAliases', {'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_DESCAN': 'DPA_DESCAN', 'REGIONAL': 'REGIONAL', 'areas': 'areas', 'LEYENDA_20': 'LEYENDA_20', 'CODIGO': 'CODIGO', });
lyr_Caracteristicasdelterreno_3.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'smc': 'smc', 'smc_desc': 'smc_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Cienagas_4.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_lagunasylagos_5.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'hyp': 'hyp', 'hyp_desc': 'hyp_desc', 'scc': 'scc', 'scc_desc': 'scc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Estratorocoso_6.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cementerio_7.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'rel': 'rel', 'rel_desc': 'rel_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Instalciondeportiva_8.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'smc': 'smc', 'smc_desc': 'smc_desc', 'kos': 'kos', 'kos_desc': 'kos_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Canterasuperficial_9.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'ppo': 'ppo', 'ppo_desc': 'ppo_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Lienasdetransmision_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'tst': 'tst', 'tst_desc': 'tst_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Lineasdetren_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'coe': 'coe', 'coe_desc': 'coe_desc', 'fco': 'fco', 'fco_desc': 'fco_desc', 'loc': 'loc', 'loc_desc': 'loc_desc', 'ltn': 'ltn', 'rgc': 'rgc', 'rgc_desc': 'rgc_desc', 'rra': 'rra', 'rra_desc': 'rra_desc', 'rrc': 'rrc', 'rrc_desc': 'rrc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Muros_12.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'wti': 'wti', 'wti_desc': 'wti_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', });
lyr_Pistadeaterrizaje_13.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'rst': 'rst', 'rst_desc': 'rst_desc', 'fuc': 'fuc', 'fuc_desc': 'fuc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Puentesegundoorden_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'tuc': 'tuc', 'tuc_desc': 'tuc_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Cercas_15.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'fti': 'fti', 'fti_desc': 'fti_desc', 'txt': 'txt', 'Shape_Leng': 'Shape_Leng', });
lyr_Acueducto_16.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'atc': 'atc', 'atc_desc': 'atc_desc', 'loc': 'loc', 'loc_desc': 'loc_desc', 'smc': 'smc', 'smc_desc': 'smc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Curvasdenivel_17.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'hqc': 'hqc', 'hqc_desc': 'hqc_desc', 'ela': 'ela', 'ela_desc': 'ela_desc', 'crv': 'crv', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Vias_18.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'rst': 'rst', 'rst_desc': 'rst_desc', 'typ': 'typ', 'typ_desc': 'typ_desc', 'hct': 'hct', 'hct_desc': 'hct_desc', 'wtc': 'wtc', 'wtc_desc': 'wtc_desc', 'loc': 'loc', 'loc_desc': 'loc_desc', 'ltn': 'ltn', 'mes': 'mes', 'mes_desc': 'mes_desc', 'tuc': 'tuc', 'tuc_desc': 'tuc_desc', 'txt': 'txt', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Nombrepoblados_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'txt': 'txt', });
lyr_Poblados_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'na2': 'na2', 'ppt': 'ppt', 'ppt_desc': 'ppt_desc', 'nute': 'nute', 'txt': 'txt', });
lyr_Puenteprimerorden_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'tuc': 'tuc', 'tuc_desc': 'tuc_desc', 'txt': 'txt', });
lyr_Puntoacotado_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'acc': 'acc', 'acc_desc': 'acc_desc', 'ela': 'ela', 'ela_desc': 'ela_desc', 'zvh': 'zvh', 'txt': 'txt', });
lyr_Puntodesvanecido_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'descripcio': 'descripcio', 'wcc': 'wcc', 'wcc_desc': 'wcc_desc', 'txt': 'txt', });
lyr_Lagunasylagos_24.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'txt': 'txt', });
lyr_Cantera_25.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'ppo': 'ppo', 'ppo_desc': 'ppo_desc', 'txt': 'txt', });
lyr_Edificaciones_26.set('fieldAliases', {'fcode': 'fcode', 'descripcio': 'descripcio', 'nam': 'nam', 'acc': 'acc', 'acc_desc': 'acc_desc', 'bfc': 'bfc', 'bfc_desc': 'bfc_desc', 'ebt': 'ebt', 'ebt_desc': 'ebt_desc', 'hwt': 'hwt', 'hwt_desc': 'hwt_desc', 'rel': 'rel', 'rel_desc': 'rel_desc', 'txt': 'txt', });
lyr_Limitecanton_2.set('fieldImages', {'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'REGIONAL': 'TextEdit', 'areas': 'TextEdit', 'LEYENDA_20': 'TextEdit', 'CODIGO': 'TextEdit', });
lyr_Caracteristicasdelterreno_3.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'smc': 'Range', 'smc_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cienagas_4.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_lagunasylagos_5.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'hyp': 'Range', 'hyp_desc': 'TextEdit', 'scc': 'Range', 'scc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Estratorocoso_6.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cementerio_7.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'rel': 'Range', 'rel_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Instalciondeportiva_8.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'smc': 'Range', 'smc_desc': 'TextEdit', 'kos': 'Range', 'kos_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Canterasuperficial_9.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'ppo': 'Range', 'ppo_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Lienasdetransmision_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'tst': 'Range', 'tst_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Lineasdetren_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'coe': 'Range', 'coe_desc': 'TextEdit', 'fco': 'Range', 'fco_desc': 'TextEdit', 'loc': 'Range', 'loc_desc': 'TextEdit', 'ltn': 'Range', 'rgc': 'Range', 'rgc_desc': 'TextEdit', 'rra': 'Range', 'rra_desc': 'TextEdit', 'rrc': 'Range', 'rrc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Muros_12.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'wti': 'Range', 'wti_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Pistadeaterrizaje_13.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'rst': 'Range', 'rst_desc': 'TextEdit', 'fuc': 'Range', 'fuc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Puentesegundoorden_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'tuc': 'Range', 'tuc_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Cercas_15.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'fti': 'Range', 'fti_desc': 'TextEdit', 'txt': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Acueducto_16.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'atc': 'Range', 'atc_desc': 'TextEdit', 'loc': 'Range', 'loc_desc': 'TextEdit', 'smc': 'Range', 'smc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Curvasdenivel_17.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'hqc': 'Range', 'hqc_desc': 'TextEdit', 'ela': 'Range', 'ela_desc': 'TextEdit', 'crv': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Vias_18.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'rst': 'Range', 'rst_desc': 'TextEdit', 'typ': 'Range', 'typ_desc': 'TextEdit', 'hct': 'Range', 'hct_desc': 'TextEdit', 'wtc': 'Range', 'wtc_desc': 'TextEdit', 'loc': 'Range', 'loc_desc': 'TextEdit', 'ltn': 'Range', 'mes': 'Range', 'mes_desc': 'TextEdit', 'tuc': 'Range', 'tuc_desc': 'TextEdit', 'txt': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Nombrepoblados_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'txt': 'TextEdit', });
lyr_Poblados_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'na2': 'TextEdit', 'ppt': 'Range', 'ppt_desc': 'TextEdit', 'nute': 'TextEdit', 'txt': 'TextEdit', });
lyr_Puenteprimerorden_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'tuc': 'Range', 'tuc_desc': 'TextEdit', 'txt': 'TextEdit', });
lyr_Puntoacotado_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'ela': 'Range', 'ela_desc': 'TextEdit', 'zvh': 'TextEdit', 'txt': 'TextEdit', });
lyr_Puntodesvanecido_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'wcc': 'Range', 'wcc_desc': 'TextEdit', 'txt': 'TextEdit', });
lyr_Lagunasylagos_24.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'txt': 'TextEdit', });
lyr_Cantera_25.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'ppo': 'Range', 'ppo_desc': 'TextEdit', 'txt': 'TextEdit', });
lyr_Edificaciones_26.set('fieldImages', {'fcode': 'TextEdit', 'descripcio': 'TextEdit', 'nam': 'TextEdit', 'acc': 'Range', 'acc_desc': 'TextEdit', 'bfc': 'Range', 'bfc_desc': 'TextEdit', 'ebt': 'Range', 'ebt_desc': 'TextEdit', 'hwt': 'Range', 'hwt_desc': 'TextEdit', 'rel': 'Range', 'rel_desc': 'TextEdit', 'txt': 'TextEdit', });
lyr_Limitecanton_2.set('fieldLabels', {'DPA_ANIO': 'no label', 'DPA_CANTON': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'DPA_DESCAN': 'no label', 'REGIONAL': 'no label', 'areas': 'no label', 'LEYENDA_20': 'no label', 'CODIGO': 'no label', });
lyr_Caracteristicasdelterreno_3.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'smc': 'no label', 'smc_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Cienagas_4.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_lagunasylagos_5.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'hyp': 'no label', 'hyp_desc': 'no label', 'scc': 'no label', 'scc_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Estratorocoso_6.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Cementerio_7.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'rel': 'no label', 'rel_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Instalciondeportiva_8.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'smc': 'no label', 'smc_desc': 'no label', 'kos': 'no label', 'kos_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Canterasuperficial_9.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'ppo': 'no label', 'ppo_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Lienasdetransmision_10.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'tst': 'no label', 'tst_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Lineasdetren_11.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'coe': 'no label', 'coe_desc': 'no label', 'fco': 'no label', 'fco_desc': 'no label', 'loc': 'no label', 'loc_desc': 'no label', 'ltn': 'no label', 'rgc': 'no label', 'rgc_desc': 'no label', 'rra': 'no label', 'rra_desc': 'no label', 'rrc': 'no label', 'rrc_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Muros_12.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'wti': 'no label', 'wti_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', });
lyr_Pistadeaterrizaje_13.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'rst': 'no label', 'rst_desc': 'no label', 'fuc': 'no label', 'fuc_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Puentesegundoorden_14.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'tuc': 'no label', 'tuc_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Cercas_15.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'fti': 'no label', 'fti_desc': 'no label', 'txt': 'no label', 'Shape_Leng': 'no label', });
lyr_Acueducto_16.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'atc': 'no label', 'atc_desc': 'no label', 'loc': 'no label', 'loc_desc': 'no label', 'smc': 'no label', 'smc_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Curvasdenivel_17.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'hqc': 'no label', 'hqc_desc': 'no label', 'ela': 'no label', 'ela_desc': 'no label', 'crv': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Vias_18.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'rst': 'no label', 'rst_desc': 'no label', 'typ': 'no label', 'typ_desc': 'no label', 'hct': 'no label', 'hct_desc': 'no label', 'wtc': 'no label', 'wtc_desc': 'no label', 'loc': 'no label', 'loc_desc': 'no label', 'ltn': 'no label', 'mes': 'no label', 'mes_desc': 'no label', 'tuc': 'no label', 'tuc_desc': 'no label', 'txt': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Nombrepoblados_19.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'txt': 'no label', });
lyr_Poblados_20.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'na2': 'no label', 'ppt': 'no label', 'ppt_desc': 'no label', 'nute': 'no label', 'txt': 'no label', });
lyr_Puenteprimerorden_21.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'tuc': 'no label', 'tuc_desc': 'no label', 'txt': 'no label', });
lyr_Puntoacotado_22.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'ela': 'no label', 'ela_desc': 'no label', 'zvh': 'no label', 'txt': 'no label', });
lyr_Puntodesvanecido_23.set('fieldLabels', {'OBJECTID': 'no label', 'fcode': 'no label', 'descripcio': 'no label', 'wcc': 'no label', 'wcc_desc': 'no label', 'txt': 'no label', });
lyr_Lagunasylagos_24.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'txt': 'no label', });
lyr_Cantera_25.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'ppo': 'no label', 'ppo_desc': 'no label', 'txt': 'no label', });
lyr_Edificaciones_26.set('fieldLabels', {'fcode': 'no label', 'descripcio': 'no label', 'nam': 'no label', 'acc': 'no label', 'acc_desc': 'no label', 'bfc': 'no label', 'bfc_desc': 'no label', 'ebt': 'no label', 'ebt_desc': 'no label', 'hwt': 'no label', 'hwt_desc': 'no label', 'rel': 'no label', 'rel_desc': 'no label', 'txt': 'no label', });
lyr_Edificaciones_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});