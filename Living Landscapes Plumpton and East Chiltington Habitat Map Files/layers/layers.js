ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-21995.345717, 6600301.548279, 9199.777181, 6615336.472241]);
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
var format_ParishBoundary_1 = new ol.format.GeoJSON();
var features_ParishBoundary_1 = format_ParishBoundary_1.readFeatures(json_ParishBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParishBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParishBoundary_1.addFeatures(features_ParishBoundary_1);
var lyr_ParishBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParishBoundary_1, 
                style: style_ParishBoundary_1,
                popuplayertitle: 'Parish Boundary',
                interactive: true,
                title: '<img src="styles/legend/ParishBoundary_1.png" /> Parish Boundary'
            });
var format_BroadleafedWoodland_2 = new ol.format.GeoJSON();
var features_BroadleafedWoodland_2 = format_BroadleafedWoodland_2.readFeatures(json_BroadleafedWoodland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BroadleafedWoodland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BroadleafedWoodland_2.addFeatures(features_BroadleafedWoodland_2);
var lyr_BroadleafedWoodland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BroadleafedWoodland_2, 
                style: style_BroadleafedWoodland_2,
                popuplayertitle: 'Broadleafed Woodland',
                interactive: true,
                title: '<img src="styles/legend/BroadleafedWoodland_2.png" /> Broadleafed Woodland'
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
var format_Urban_4 = new ol.format.GeoJSON();
var features_Urban_4 = format_Urban_4.readFeatures(json_Urban_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_4.addFeatures(features_Urban_4);
var lyr_Urban_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_4, 
                style: style_Urban_4,
                popuplayertitle: 'Urban',
                interactive: true,
                title: '<img src="styles/legend/Urban_4.png" /> Urban'
            });
var format_Freshwater_5 = new ol.format.GeoJSON();
var features_Freshwater_5 = format_Freshwater_5.readFeatures(json_Freshwater_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freshwater_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freshwater_5.addFeatures(features_Freshwater_5);
var lyr_Freshwater_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freshwater_5, 
                style: style_Freshwater_5,
                popuplayertitle: 'Freshwater',
                interactive: true,
                title: '<img src="styles/legend/Freshwater_5.png" /> Freshwater'
            });
var format_ConiferousWoodland_6 = new ol.format.GeoJSON();
var features_ConiferousWoodland_6 = format_ConiferousWoodland_6.readFeatures(json_ConiferousWoodland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConiferousWoodland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConiferousWoodland_6.addFeatures(features_ConiferousWoodland_6);
var lyr_ConiferousWoodland_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConiferousWoodland_6, 
                style: style_ConiferousWoodland_6,
                popuplayertitle: 'Coniferous Woodland',
                interactive: true,
                title: '<img src="styles/legend/ConiferousWoodland_6.png" /> Coniferous Woodland'
            });
var format_ArableandHorticulture_7 = new ol.format.GeoJSON();
var features_ArableandHorticulture_7 = format_ArableandHorticulture_7.readFeatures(json_ArableandHorticulture_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArableandHorticulture_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArableandHorticulture_7.addFeatures(features_ArableandHorticulture_7);
var lyr_ArableandHorticulture_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArableandHorticulture_7, 
                style: style_ArableandHorticulture_7,
                popuplayertitle: 'Arable and Horticulture',
                interactive: true,
                title: '<img src="styles/legend/ArableandHorticulture_7.png" /> Arable and Horticulture'
            });
var format_FenMarshandSwamp_8 = new ol.format.GeoJSON();
var features_FenMarshandSwamp_8 = format_FenMarshandSwamp_8.readFeatures(json_FenMarshandSwamp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FenMarshandSwamp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FenMarshandSwamp_8.addFeatures(features_FenMarshandSwamp_8);
var lyr_FenMarshandSwamp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FenMarshandSwamp_8, 
                style: style_FenMarshandSwamp_8,
                popuplayertitle: 'Fen, Marsh and Swamp',
                interactive: true,
                title: '<img src="styles/legend/FenMarshandSwamp_8.png" /> Fen, Marsh and Swamp'
            });
var format_HeatherGrassland_9 = new ol.format.GeoJSON();
var features_HeatherGrassland_9 = format_HeatherGrassland_9.readFeatures(json_HeatherGrassland_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeatherGrassland_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeatherGrassland_9.addFeatures(features_HeatherGrassland_9);
var lyr_HeatherGrassland_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeatherGrassland_9, 
                style: style_HeatherGrassland_9,
                popuplayertitle: 'Heather Grassland',
                interactive: true,
                title: '<img src="styles/legend/HeatherGrassland_9.png" /> Heather Grassland'
            });
var format_Grassland_10 = new ol.format.GeoJSON();
var features_Grassland_10 = format_Grassland_10.readFeatures(json_Grassland_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grassland_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grassland_10.addFeatures(features_Grassland_10);
var lyr_Grassland_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grassland_10, 
                style: style_Grassland_10,
                popuplayertitle: 'Grassland',
                interactive: true,
                title: '<img src="styles/legend/Grassland_10.png" /> Grassland'
            });
var format_AncientTree_11 = new ol.format.GeoJSON();
var features_AncientTree_11 = format_AncientTree_11.readFeatures(json_AncientTree_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientTree_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientTree_11.addFeatures(features_AncientTree_11);
var lyr_AncientTree_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AncientTree_11, 
                style: style_AncientTree_11,
                popuplayertitle: 'Ancient Tree',
                interactive: true,
                title: '<img src="styles/legend/AncientTree_11.png" /> Ancient Tree'
            });
var format_WalkingRoutes_12 = new ol.format.GeoJSON();
var features_WalkingRoutes_12 = format_WalkingRoutes_12.readFeatures(json_WalkingRoutes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingRoutes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingRoutes_12.addFeatures(features_WalkingRoutes_12);
var lyr_WalkingRoutes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingRoutes_12, 
                style: style_WalkingRoutes_12,
                popuplayertitle: 'Walking Routes',
                interactive: true,
                title: '<img src="styles/legend/WalkingRoutes_12.png" /> Walking Routes'
            });
var format_Rivers_13 = new ol.format.GeoJSON();
var features_Rivers_13 = format_Rivers_13.readFeatures(json_Rivers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_13.addFeatures(features_Rivers_13);
var lyr_Rivers_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_13, 
                style: style_Rivers_13,
                popuplayertitle: 'Rivers',
                interactive: true,
                title: '<img src="styles/legend/Rivers_13.png" /> Rivers'
            });
var format_Amphibians_14 = new ol.format.GeoJSON();
var features_Amphibians_14 = format_Amphibians_14.readFeatures(json_Amphibians_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amphibians_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amphibians_14.addFeatures(features_Amphibians_14);
var lyr_Amphibians_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amphibians_14, 
                style: style_Amphibians_14,
                popuplayertitle: 'Amphibians',
                interactive: true,
                title: '<img src="styles/legend/Amphibians_14.png" /> Amphibians'
            });
var format_Mammals_15 = new ol.format.GeoJSON();
var features_Mammals_15 = format_Mammals_15.readFeatures(json_Mammals_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mammals_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mammals_15.addFeatures(features_Mammals_15);
var lyr_Mammals_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mammals_15, 
                style: style_Mammals_15,
                popuplayertitle: 'Mammals',
                interactive: true,
                title: '<img src="styles/legend/Mammals_15.png" /> Mammals'
            });
var format_Bats_16 = new ol.format.GeoJSON();
var features_Bats_16 = format_Bats_16.readFeatures(json_Bats_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bats_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bats_16.addFeatures(features_Bats_16);
var lyr_Bats_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bats_16, 
                style: style_Bats_16,
                popuplayertitle: 'Bats',
                interactive: true,
                title: '<img src="styles/legend/Bats_16.png" /> Bats'
            });
var format_Reptiles_17 = new ol.format.GeoJSON();
var features_Reptiles_17 = format_Reptiles_17.readFeatures(json_Reptiles_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reptiles_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reptiles_17.addFeatures(features_Reptiles_17);
var lyr_Reptiles_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reptiles_17, 
                style: style_Reptiles_17,
                popuplayertitle: 'Reptiles',
                interactive: true,
                title: '<img src="styles/legend/Reptiles_17.png" /> Reptiles'
            });
var format_Invertebrates_18 = new ol.format.GeoJSON();
var features_Invertebrates_18 = format_Invertebrates_18.readFeatures(json_Invertebrates_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Invertebrates_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Invertebrates_18.addFeatures(features_Invertebrates_18);
var lyr_Invertebrates_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Invertebrates_18, 
                style: style_Invertebrates_18,
                popuplayertitle: 'Invertebrates',
                interactive: true,
                title: '<img src="styles/legend/Invertebrates_18.png" /> Invertebrates'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ParishBoundary_1.setVisible(true);lyr_BroadleafedWoodland_2.setVisible(true);lyr_InlandRock_3.setVisible(true);lyr_Urban_4.setVisible(true);lyr_Freshwater_5.setVisible(true);lyr_ConiferousWoodland_6.setVisible(true);lyr_ArableandHorticulture_7.setVisible(true);lyr_FenMarshandSwamp_8.setVisible(true);lyr_HeatherGrassland_9.setVisible(true);lyr_Grassland_10.setVisible(true);lyr_AncientTree_11.setVisible(true);lyr_WalkingRoutes_12.setVisible(true);lyr_Rivers_13.setVisible(true);lyr_Amphibians_14.setVisible(true);lyr_Mammals_15.setVisible(true);lyr_Bats_16.setVisible(true);lyr_Reptiles_17.setVisible(true);lyr_Invertebrates_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ParishBoundary_1,lyr_BroadleafedWoodland_2,lyr_InlandRock_3,lyr_Urban_4,lyr_Freshwater_5,lyr_ConiferousWoodland_6,lyr_ArableandHorticulture_7,lyr_FenMarshandSwamp_8,lyr_HeatherGrassland_9,lyr_Grassland_10,lyr_AncientTree_11,lyr_WalkingRoutes_12,lyr_Rivers_13,lyr_Amphibians_14,lyr_Mammals_15,lyr_Bats_16,lyr_Reptiles_17,lyr_Invertebrates_18];
lyr_ParishBoundary_1.set('fieldAliases', {'PAR24CD': 'PAR24CD', 'PAR24NM': 'PAR24NM', 'PAR24NMW': 'PAR24NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_BroadleafedWoodland_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Woodland Name', 'type': 'Woodland Type', });
lyr_InlandRock_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_Urban_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'layer': 'Type', 'path': 'path', });
lyr_Freshwater_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ConiferousWoodland_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_ArableandHorticulture_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_FenMarshandSwamp_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', });
lyr_HeatherGrassland_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Name', 'layer': 'Type', 'path': 'path', });
lyr_Grassland_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Name': 'Grassland', 'layer': 'Type', 'path': 'path', });
lyr_AncientTree_11.set('fieldAliases', {'Id': 'Id', 'SurveyDate': 'SurveyDate', 'VerifiedDa': 'VerifiedDa', 'MeasuredGi': 'MeasuredGi', 'MeasuredHe': 'MeasuredHe', 'EstimatedG': 'EstimatedG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GridRefere': 'GridRefere', 'Species': 'Species', 'TreeForm': 'TreeForm', 'RecorderOr': 'RecorderOr', 'LocalName': 'LocalName', 'Town': 'Town', 'County': 'County', 'Country': 'Country', 'StandingSt': 'Still Standing', 'LivingStat': 'LivingStat', 'PublicAcce': 'Public Access', 'VeteranSta': 'Veteran or Ancient', 'Protection': 'Protection', 'SpecialSta': 'SpecialSta', 'Epiphyte': 'Epiphyte', 'Fungus': 'Fungus', 'Condition_': 'Condition_', });
lyr_WalkingRoutes_12.set('fieldAliases', {'StatusDesc': 'Status', 'Path_Name': 'Path Name', });
lyr_Rivers_13.set('fieldAliases', {'name1': 'Name', 'identifier': 'identifier', 'startNode': 'startNode', 'endNode': 'endNode', 'form': 'form', 'flow': 'flow', 'fictitious': 'fictitious', 'length': 'length', 'name2': 'name2', });
lyr_Amphibians_14.set('fieldAliases', {'fid': 'fid', 'TaxonGroup': 'Species Group', 'TaxonName': 'TaxonName', 'CommonName': 'Species Name', 'RecDate': 'RecDate', 'RecYear': 'RecYear', 'GridRef': 'GridRef', 'Grid1k': 'Grid1k', 'Easting': 'Easting', 'Northing': 'Northing', 'Location': 'Location', 'Abundance': 'Abundance', 'AbundCount': 'AbundCount', 'SampleType': 'SampleType', 'RoostType': 'RoostType', 'RoostLoc': 'RoostLoc', 'Recorder': 'Recorder', 'Determiner': 'Determiner', 'Comments': 'Comments', 'StatusEuro': 'StatusEuro', 'StatusUK': 'StatusUK', 'StatusOth': 'StatusOth', 'RecOccKey': 'RecOccKey', 'SortOrder': 'SortOrder', 'Species Te': 'Species Te', });
lyr_Mammals_15.set('fieldAliases', {'fid': 'fid', 'TaxonGroup': 'Species Group', 'TaxonName': 'TaxonName', 'CommonName': 'Species Name', 'RecDate': 'RecDate', 'RecYear': 'RecYear', 'GridRef': 'GridRef', 'Grid1k': 'Grid1k', 'Easting': 'Easting', 'Northing': 'Northing', 'Location': 'Location', 'Abundance': 'Abundance', 'AbundCount': 'AbundCount', 'SampleType': 'SampleType', 'RoostType': 'RoostType', 'RoostLoc': 'RoostLoc', 'Recorder': 'Recorder', 'Determiner': 'Determiner', 'Comments': 'Comments', 'StatusEuro': 'StatusEuro', 'StatusUK': 'StatusUK', 'StatusOth': 'StatusOth', 'RecOccKey': 'RecOccKey', 'SortOrder': 'SortOrder', 'Species Te': 'Species Te', });
lyr_Bats_16.set('fieldAliases', {'fid': 'fid', 'TaxonGroup': 'Species Group', 'TaxonName': 'TaxonName', 'CommonName': 'Species Name', 'RecDate': 'RecDate', 'RecYear': 'RecYear', 'GridRef': 'GridRef', 'Grid1k': 'Grid1k', 'Easting': 'Easting', 'Northing': 'Northing', 'Location': 'Location', 'Abundance': 'Abundance', 'AbundCount': 'AbundCount', 'SampleType': 'SampleType', 'RoostType': 'RoostType', 'RoostLoc': 'RoostLoc', 'Recorder': 'Recorder', 'Determiner': 'Determiner', 'Comments': 'Comments', 'StatusEuro': 'StatusEuro', 'StatusUK': 'StatusUK', 'StatusOth': 'StatusOth', 'RecOccKey': 'RecOccKey', 'SortOrder': 'SortOrder', 'Species Te': 'Species Te', });
lyr_Reptiles_17.set('fieldAliases', {'fid': 'fid', 'TaxonGroup': 'Species Group', 'TaxonName': 'TaxonName', 'CommonName': 'Species Name', 'RecDate': 'RecDate', 'RecYear': 'RecYear', 'GridRef': 'GridRef', 'Grid1k': 'Grid1k', 'Easting': 'Easting', 'Northing': 'Northing', 'Location': 'Location', 'Abundance': 'Abundance', 'AbundCount': 'AbundCount', 'SampleType': 'SampleType', 'RoostType': 'RoostType', 'RoostLoc': 'RoostLoc', 'Recorder': 'Recorder', 'Determiner': 'Determiner', 'Comments': 'Comments', 'StatusEuro': 'StatusEuro', 'StatusUK': 'StatusUK', 'StatusOth': 'StatusOth', 'RecOccKey': 'RecOccKey', 'SortOrder': 'SortOrder', 'Species Te': 'Species Te', });
lyr_Invertebrates_18.set('fieldAliases', {'fid': 'fid', 'TaxonGroup': 'Species Group', 'TaxonName': 'TaxonName', 'CommonName': 'Species Name', 'RecDate': 'RecDate', 'RecYear': 'RecYear', 'GridRef': 'GridRef', 'Grid1k': 'Grid1k', 'Easting': 'Easting', 'Northing': 'Northing', 'Location': 'Location', 'Abundance': 'Abundance', 'AbundCount': 'AbundCount', 'SampleType': 'SampleType', 'RoostType': 'RoostType', 'RoostLoc': 'RoostLoc', 'Recorder': 'Recorder', 'Determiner': 'Determiner', 'Comments': 'Comments', 'StatusEuro': 'StatusEuro', 'StatusUK': 'StatusUK', 'StatusOth': 'StatusOth', 'RecOccKey': 'RecOccKey', 'SortOrder': 'SortOrder', 'Species Te': 'Species Te', 'layer': 'layer', 'path': 'path', });
lyr_ParishBoundary_1.set('fieldImages', {'PAR24CD': 'Hidden', 'PAR24NM': 'TextEdit', 'PAR24NMW': 'Hidden', 'BNG_E': 'Hidden', 'BNG_N': 'Hidden', 'LONG': 'Hidden', 'LAT': 'Hidden', 'GlobalID': 'Hidden', });
lyr_BroadleafedWoodland_2.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'TextEdit', 'type': 'TextEdit', });
lyr_InlandRock_3.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', });
lyr_Urban_4.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', 'layer': 'TextEdit', 'path': 'Hidden', });
lyr_Freshwater_5.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', });
lyr_ConiferousWoodland_6.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', });
lyr_ArableandHorticulture_7.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', });
lyr_FenMarshandSwamp_8.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', });
lyr_HeatherGrassland_9.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', 'layer': 'TextEdit', 'path': 'Hidden', });
lyr_Grassland_10.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Name': 'Hidden', 'layer': 'TextEdit', 'path': 'Hidden', });
lyr_AncientTree_11.set('fieldImages', {'Id': 'Hidden', 'SurveyDate': 'Hidden', 'VerifiedDa': 'Hidden', 'MeasuredGi': 'Hidden', 'MeasuredHe': 'Hidden', 'EstimatedG': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'GridRefere': 'Hidden', 'Species': 'TextEdit', 'TreeForm': 'Hidden', 'RecorderOr': 'Hidden', 'LocalName': 'Hidden', 'Town': 'Hidden', 'County': 'Hidden', 'Country': 'Hidden', 'StandingSt': 'TextEdit', 'LivingStat': 'Hidden', 'PublicAcce': 'TextEdit', 'VeteranSta': 'TextEdit', 'Protection': 'Hidden', 'SpecialSta': 'Hidden', 'Epiphyte': 'Hidden', 'Fungus': 'Hidden', 'Condition_': 'Hidden', });
lyr_WalkingRoutes_12.set('fieldImages', {'StatusDesc': 'TextEdit', 'Path_Name': 'TextEdit', });
lyr_Rivers_13.set('fieldImages', {'name1': 'TextEdit', 'identifier': 'Hidden', 'startNode': 'Hidden', 'endNode': 'Hidden', 'form': 'Hidden', 'flow': 'Hidden', 'fictitious': 'Hidden', 'length': 'Hidden', 'name2': 'Hidden', });
lyr_Amphibians_14.set('fieldImages', {'fid': 'Hidden', 'TaxonGroup': 'TextEdit', 'TaxonName': 'Hidden', 'CommonName': 'TextEdit', 'RecDate': 'Hidden', 'RecYear': 'Hidden', 'GridRef': 'Hidden', 'Grid1k': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Location': 'Hidden', 'Abundance': 'Hidden', 'AbundCount': 'Hidden', 'SampleType': 'Hidden', 'RoostType': 'Hidden', 'RoostLoc': 'Hidden', 'Recorder': 'Hidden', 'Determiner': 'Hidden', 'Comments': 'Hidden', 'StatusEuro': 'Hidden', 'StatusUK': 'Hidden', 'StatusOth': 'Hidden', 'RecOccKey': 'Hidden', 'SortOrder': 'Hidden', 'Species Te': 'Hidden', });
lyr_Mammals_15.set('fieldImages', {'fid': 'Hidden', 'TaxonGroup': 'TextEdit', 'TaxonName': 'Hidden', 'CommonName': 'TextEdit', 'RecDate': 'Hidden', 'RecYear': 'Hidden', 'GridRef': 'Hidden', 'Grid1k': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Location': 'Hidden', 'Abundance': 'Hidden', 'AbundCount': 'Hidden', 'SampleType': 'Hidden', 'RoostType': 'Hidden', 'RoostLoc': 'Hidden', 'Recorder': 'Hidden', 'Determiner': 'Hidden', 'Comments': 'Hidden', 'StatusEuro': 'Hidden', 'StatusUK': 'Hidden', 'StatusOth': 'Hidden', 'RecOccKey': 'Hidden', 'SortOrder': 'Hidden', 'Species Te': 'Hidden', });
lyr_Bats_16.set('fieldImages', {'fid': 'Hidden', 'TaxonGroup': 'TextEdit', 'TaxonName': 'Hidden', 'CommonName': 'TextEdit', 'RecDate': 'Hidden', 'RecYear': 'Hidden', 'GridRef': 'Hidden', 'Grid1k': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Location': 'Hidden', 'Abundance': 'Hidden', 'AbundCount': 'Hidden', 'SampleType': 'Hidden', 'RoostType': 'Hidden', 'RoostLoc': 'Hidden', 'Recorder': 'Hidden', 'Determiner': 'Hidden', 'Comments': 'Hidden', 'StatusEuro': 'Hidden', 'StatusUK': 'Hidden', 'StatusOth': 'Hidden', 'RecOccKey': 'Hidden', 'SortOrder': 'Hidden', 'Species Te': 'Hidden', });
lyr_Reptiles_17.set('fieldImages', {'fid': 'Hidden', 'TaxonGroup': 'TextEdit', 'TaxonName': 'Hidden', 'CommonName': 'TextEdit', 'RecDate': 'Hidden', 'RecYear': 'Hidden', 'GridRef': 'Hidden', 'Grid1k': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Location': 'Hidden', 'Abundance': 'Hidden', 'AbundCount': 'Hidden', 'SampleType': 'Hidden', 'RoostType': 'Hidden', 'RoostLoc': 'Hidden', 'Recorder': 'Hidden', 'Determiner': 'Hidden', 'Comments': 'Hidden', 'StatusEuro': 'Hidden', 'StatusUK': 'Hidden', 'StatusOth': 'Hidden', 'RecOccKey': 'Hidden', 'SortOrder': 'Hidden', 'Species Te': 'Hidden', });
lyr_Invertebrates_18.set('fieldImages', {'fid': 'Hidden', 'TaxonGroup': 'TextEdit', 'TaxonName': 'Hidden', 'CommonName': 'TextEdit', 'RecDate': 'Hidden', 'RecYear': 'Hidden', 'GridRef': 'Hidden', 'Grid1k': 'Hidden', 'Easting': 'Hidden', 'Northing': 'Hidden', 'Location': 'Hidden', 'Abundance': 'Hidden', 'AbundCount': 'Hidden', 'SampleType': 'Hidden', 'RoostType': 'Hidden', 'RoostLoc': 'Hidden', 'Recorder': 'Hidden', 'Determiner': 'Hidden', 'Comments': 'Hidden', 'StatusEuro': 'Hidden', 'StatusUK': 'Hidden', 'StatusOth': 'Hidden', 'RecOccKey': 'Hidden', 'SortOrder': 'Hidden', 'Species Te': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_ParishBoundary_1.set('fieldLabels', {'PAR24NM': 'hidden field', });
lyr_BroadleafedWoodland_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_InlandRock_3.set('fieldLabels', {});
lyr_Urban_4.set('fieldLabels', {'layer': 'inline label - always visible', });
lyr_Freshwater_5.set('fieldLabels', {});
lyr_ConiferousWoodland_6.set('fieldLabels', {});
lyr_ArableandHorticulture_7.set('fieldLabels', {});
lyr_FenMarshandSwamp_8.set('fieldLabels', {});
lyr_HeatherGrassland_9.set('fieldLabels', {'layer': 'inline label - always visible', });
lyr_Grassland_10.set('fieldLabels', {'layer': 'inline label - always visible', });
lyr_AncientTree_11.set('fieldLabels', {'Species': 'inline label - visible with data', 'StandingSt': 'inline label - visible with data', 'PublicAcce': 'inline label - visible with data', 'VeteranSta': 'inline label - visible with data', });
lyr_WalkingRoutes_12.set('fieldLabels', {'StatusDesc': 'inline label - visible with data', 'Path_Name': 'inline label - visible with data', });
lyr_Rivers_13.set('fieldLabels', {'name1': 'inline label - visible with data', });
lyr_Amphibians_14.set('fieldLabels', {'TaxonGroup': 'header label - visible with data', 'CommonName': 'inline label - visible with data', });
lyr_Mammals_15.set('fieldLabels', {'TaxonGroup': 'inline label - visible with data', 'CommonName': 'inline label - visible with data', });
lyr_Bats_16.set('fieldLabels', {'TaxonGroup': 'inline label - visible with data', 'CommonName': 'inline label - visible with data', });
lyr_Reptiles_17.set('fieldLabels', {'TaxonGroup': 'inline label - visible with data', 'CommonName': 'inline label - visible with data', });
lyr_Invertebrates_18.set('fieldLabels', {'TaxonGroup': 'inline label - visible with data', 'CommonName': 'inline label - visible with data', });
lyr_Invertebrates_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});