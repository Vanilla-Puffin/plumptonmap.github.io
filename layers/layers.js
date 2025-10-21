ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-22231.373191, 6598125.456525, 14407.604610, 6615784.122178]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BroadleafedWoodland_1 = new ol.format.GeoJSON();
var features_BroadleafedWoodland_1 = format_BroadleafedWoodland_1.readFeatures(json_BroadleafedWoodland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BroadleafedWoodland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BroadleafedWoodland_1.addFeatures(features_BroadleafedWoodland_1);
var lyr_BroadleafedWoodland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BroadleafedWoodland_1, 
                style: style_BroadleafedWoodland_1,
                popuplayertitle: 'Broadleafed Woodland',
                interactive: true,
                title: '<img src="styles/legend/BroadleafedWoodland_1.png" /> Broadleafed Woodland'
            });
var format_HeatherGrassland_2 = new ol.format.GeoJSON();
var features_HeatherGrassland_2 = format_HeatherGrassland_2.readFeatures(json_HeatherGrassland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeatherGrassland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeatherGrassland_2.addFeatures(features_HeatherGrassland_2);
var lyr_HeatherGrassland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeatherGrassland_2, 
                style: style_HeatherGrassland_2,
                popuplayertitle: 'Heather Grassland',
                interactive: true,
                title: '<img src="styles/legend/HeatherGrassland_2.png" /> Heather Grassland'
            });
var format_InlandRock_3 = new ol.format.GeoJSON();
var features_InlandRock_3 = format_InlandRock_3.readFeatures(json_InlandRock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InlandRock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InlandRock_3.addFeatures(features_InlandRock_3);
var lyr_InlandRock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InlandRock_3, 
                style: style_InlandRock_3,
                popuplayertitle: 'Inland Rock',
                interactive: true,
                title: '<img src="styles/legend/InlandRock_3.png" /> Inland Rock'
            });
var format_Freshwater_4 = new ol.format.GeoJSON();
var features_Freshwater_4 = format_Freshwater_4.readFeatures(json_Freshwater_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freshwater_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freshwater_4.addFeatures(features_Freshwater_4);
var lyr_Freshwater_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freshwater_4, 
                style: style_Freshwater_4,
                popuplayertitle: 'Freshwater',
                interactive: true,
                title: '<img src="styles/legend/Freshwater_4.png" /> Freshwater'
            });
var format_ConiferousWoodland_5 = new ol.format.GeoJSON();
var features_ConiferousWoodland_5 = format_ConiferousWoodland_5.readFeatures(json_ConiferousWoodland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConiferousWoodland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConiferousWoodland_5.addFeatures(features_ConiferousWoodland_5);
var lyr_ConiferousWoodland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConiferousWoodland_5, 
                style: style_ConiferousWoodland_5,
                popuplayertitle: 'Coniferous Woodland',
                interactive: true,
                title: '<img src="styles/legend/ConiferousWoodland_5.png" /> Coniferous Woodland'
            });
var format_Urban_6 = new ol.format.GeoJSON();
var features_Urban_6 = format_Urban_6.readFeatures(json_Urban_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_6.addFeatures(features_Urban_6);
var lyr_Urban_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_6, 
                style: style_Urban_6,
                popuplayertitle: 'Urban',
                interactive: true,
                title: '<img src="styles/legend/Urban_6.png" /> Urban'
            });
var format_Suburban_7 = new ol.format.GeoJSON();
var features_Suburban_7 = format_Suburban_7.readFeatures(json_Suburban_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburban_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburban_7.addFeatures(features_Suburban_7);
var lyr_Suburban_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburban_7, 
                style: style_Suburban_7,
                popuplayertitle: 'Suburban',
                interactive: true,
                title: '<img src="styles/legend/Suburban_7.png" /> Suburban'
            });
var format_ArableandHorticulture_8 = new ol.format.GeoJSON();
var features_ArableandHorticulture_8 = format_ArableandHorticulture_8.readFeatures(json_ArableandHorticulture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArableandHorticulture_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArableandHorticulture_8.addFeatures(features_ArableandHorticulture_8);
var lyr_ArableandHorticulture_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArableandHorticulture_8, 
                style: style_ArableandHorticulture_8,
                popuplayertitle: 'Arable and Horticulture',
                interactive: true,
                title: '<img src="styles/legend/ArableandHorticulture_8.png" /> Arable and Horticulture'
            });
var format_ImprovedGrassland_9 = new ol.format.GeoJSON();
var features_ImprovedGrassland_9 = format_ImprovedGrassland_9.readFeatures(json_ImprovedGrassland_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImprovedGrassland_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImprovedGrassland_9.addFeatures(features_ImprovedGrassland_9);
var lyr_ImprovedGrassland_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImprovedGrassland_9, 
                style: style_ImprovedGrassland_9,
                popuplayertitle: 'Improved Grassland',
                interactive: true,
                title: '<img src="styles/legend/ImprovedGrassland_9.png" /> Improved Grassland'
            });
var format_NeutralGrassland_10 = new ol.format.GeoJSON();
var features_NeutralGrassland_10 = format_NeutralGrassland_10.readFeatures(json_NeutralGrassland_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeutralGrassland_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeutralGrassland_10.addFeatures(features_NeutralGrassland_10);
var lyr_NeutralGrassland_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeutralGrassland_10, 
                style: style_NeutralGrassland_10,
                popuplayertitle: 'Neutral Grassland',
                interactive: true,
                title: '<img src="styles/legend/NeutralGrassland_10.png" /> Neutral Grassland'
            });
var format_CalcareousGrassland_11 = new ol.format.GeoJSON();
var features_CalcareousGrassland_11 = format_CalcareousGrassland_11.readFeatures(json_CalcareousGrassland_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CalcareousGrassland_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CalcareousGrassland_11.addFeatures(features_CalcareousGrassland_11);
var lyr_CalcareousGrassland_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CalcareousGrassland_11, 
                style: style_CalcareousGrassland_11,
                popuplayertitle: 'Calcareous Grassland',
                interactive: true,
                title: '<img src="styles/legend/CalcareousGrassland_11.png" /> Calcareous Grassland'
            });
var format_FenMarshandSwamp_12 = new ol.format.GeoJSON();
var features_FenMarshandSwamp_12 = format_FenMarshandSwamp_12.readFeatures(json_FenMarshandSwamp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FenMarshandSwamp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FenMarshandSwamp_12.addFeatures(features_FenMarshandSwamp_12);
var lyr_FenMarshandSwamp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FenMarshandSwamp_12, 
                style: style_FenMarshandSwamp_12,
                popuplayertitle: 'Fen, Marsh and Swamp',
                interactive: true,
                title: '<img src="styles/legend/FenMarshandSwamp_12.png" /> Fen, Marsh and Swamp'
            });
var format_Heather_13 = new ol.format.GeoJSON();
var features_Heather_13 = format_Heather_13.readFeatures(json_Heather_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heather_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heather_13.addFeatures(features_Heather_13);
var lyr_Heather_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heather_13, 
                style: style_Heather_13,
                popuplayertitle: 'Heather',
                interactive: true,
                title: '<img src="styles/legend/Heather_13.png" /> Heather'
            });
var format_ParishBoundary_14 = new ol.format.GeoJSON();
var features_ParishBoundary_14 = format_ParishBoundary_14.readFeatures(json_ParishBoundary_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParishBoundary_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParishBoundary_14.addFeatures(features_ParishBoundary_14);
var lyr_ParishBoundary_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParishBoundary_14, 
                style: style_ParishBoundary_14,
                popuplayertitle: 'Parish Boundary',
                interactive: false,
                title: '<img src="styles/legend/ParishBoundary_14.png" /> Parish Boundary'
            });
var format_AncientTree_15 = new ol.format.GeoJSON();
var features_AncientTree_15 = format_AncientTree_15.readFeatures(json_AncientTree_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientTree_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientTree_15.addFeatures(features_AncientTree_15);
var lyr_AncientTree_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AncientTree_15, 
                style: style_AncientTree_15,
                popuplayertitle: 'Ancient Tree',
                interactive: true,
                title: '<img src="styles/legend/AncientTree_15.png" /> Ancient Tree'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BroadleafedWoodland_1.setVisible(true);lyr_HeatherGrassland_2.setVisible(true);lyr_InlandRock_3.setVisible(true);lyr_Freshwater_4.setVisible(true);lyr_ConiferousWoodland_5.setVisible(true);lyr_Urban_6.setVisible(true);lyr_Suburban_7.setVisible(true);lyr_ArableandHorticulture_8.setVisible(true);lyr_ImprovedGrassland_9.setVisible(true);lyr_NeutralGrassland_10.setVisible(true);lyr_CalcareousGrassland_11.setVisible(true);lyr_FenMarshandSwamp_12.setVisible(true);lyr_Heather_13.setVisible(true);lyr_ParishBoundary_14.setVisible(true);lyr_AncientTree_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BroadleafedWoodland_1,lyr_HeatherGrassland_2,lyr_InlandRock_3,lyr_Freshwater_4,lyr_ConiferousWoodland_5,lyr_Urban_6,lyr_Suburban_7,lyr_ArableandHorticulture_8,lyr_ImprovedGrassland_9,lyr_NeutralGrassland_10,lyr_CalcareousGrassland_11,lyr_FenMarshandSwamp_12,lyr_Heather_13,lyr_ParishBoundary_14,lyr_AncientTree_15];
lyr_BroadleafedWoodland_1.set('fieldAliases', {'fid': 'fid', 'DN': 'Broadleafed Woodland', 'Name': 'Name', });
lyr_HeatherGrassland_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_InlandRock_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Freshwater_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ConiferousWoodland_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Urban_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Suburban_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ArableandHorticulture_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ImprovedGrassland_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_NeutralGrassland_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_CalcareousGrassland_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_FenMarshandSwamp_12.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Heather_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ParishBoundary_14.set('fieldAliases', {'PAR24CD': 'PAR24CD', 'PAR24NM': 'PAR24NM', 'PAR24NMW': 'PAR24NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_AncientTree_15.set('fieldAliases', {'Id': 'Id', 'SurveyDate': 'SurveyDate', 'VerifiedDa': 'VerifiedDa', 'MeasuredGi': 'MeasuredGi', 'MeasuredHe': 'MeasuredHe', 'EstimatedG': 'EstimatedG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GridRefere': 'GridRefere', 'Species': 'Species', 'TreeForm': 'TreeForm', 'RecorderOr': 'RecorderOr', 'LocalName': 'LocalName', 'Town': 'Town', 'County': 'County', 'Country': 'Country', 'StandingSt': 'Still Standing', 'LivingStat': 'LivingStat', 'PublicAcce': 'Public Access', 'VeteranSta': 'Veteran or Ancient', 'Protection': 'Protection', 'SpecialSta': 'SpecialSta', 'Epiphyte': 'Epiphyte', 'Fungus': 'Fungus', 'Condition_': 'Condition_', });
lyr_BroadleafedWoodland_1.set('fieldImages', {'fid': 'Hidden', 'DN': 'TextEdit', 'Name': 'TextEdit', });
lyr_HeatherGrassland_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_InlandRock_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_Freshwater_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_ConiferousWoodland_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_Urban_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_Suburban_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_ArableandHorticulture_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_ImprovedGrassland_9.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_NeutralGrassland_10.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_CalcareousGrassland_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_FenMarshandSwamp_12.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_Heather_13.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Name': 'TextEdit', });
lyr_ParishBoundary_14.set('fieldImages', {'PAR24CD': 'Hidden', 'PAR24NM': 'Hidden', 'PAR24NMW': 'Hidden', 'BNG_E': 'Hidden', 'BNG_N': 'Hidden', 'LONG': 'Hidden', 'LAT': 'Hidden', 'GlobalID': 'Hidden', });
lyr_AncientTree_15.set('fieldImages', {'Id': 'Hidden', 'SurveyDate': 'Hidden', 'VerifiedDa': 'Hidden', 'MeasuredGi': 'Hidden', 'MeasuredHe': 'Hidden', 'EstimatedG': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'GridRefere': 'Hidden', 'Species': 'TextEdit', 'TreeForm': 'Hidden', 'RecorderOr': 'Hidden', 'LocalName': 'Hidden', 'Town': 'Hidden', 'County': 'Hidden', 'Country': 'Hidden', 'StandingSt': 'TextEdit', 'LivingStat': 'Hidden', 'PublicAcce': 'TextEdit', 'VeteranSta': 'TextEdit', 'Protection': 'Hidden', 'SpecialSta': 'Hidden', 'Epiphyte': 'Hidden', 'Fungus': 'Hidden', 'Condition_': 'Hidden', });
lyr_BroadleafedWoodland_1.set('fieldLabels', {'DN': 'header label - visible with data', 'Name': 'header label - always visible', });
lyr_HeatherGrassland_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_InlandRock_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_Freshwater_4.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_ConiferousWoodland_5.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_Urban_6.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_Suburban_7.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_ArableandHorticulture_8.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_ImprovedGrassland_9.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_NeutralGrassland_10.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_CalcareousGrassland_11.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_FenMarshandSwamp_12.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_Heather_13.set('fieldLabels', {'fid': 'hidden field', 'DN': 'header label - visible with data', 'Name': 'hidden field', });
lyr_ParishBoundary_14.set('fieldLabels', {});
lyr_AncientTree_15.set('fieldLabels', {'Species': 'header label - visible with data', 'StandingSt': 'header label - visible with data', 'PublicAcce': 'header label - visible with data', 'VeteranSta': 'header label - visible with data', });
lyr_AncientTree_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});