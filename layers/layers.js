ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12577.447821, 6601990.168921, 7038.058740, 6611677.087459]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_clip_parishes3_1 = new ol.format.GeoJSON();
var features_clip_parishes3_1 = format_clip_parishes3_1.readFeatures(json_clip_parishes3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_parishes3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_parishes3_1.addFeatures(features_clip_parishes3_1);
var lyr_clip_parishes3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_parishes3_1, 
                style: style_clip_parishes3_1,
                popuplayertitle: 'clip_parishes3',
                interactive: false,
                title: '<img src="styles/legend/clip_parishes3_1.png" /> clip_parishes3'
            });
var format_clip_ancient_tree_2 = new ol.format.GeoJSON();
var features_clip_ancient_tree_2 = format_clip_ancient_tree_2.readFeatures(json_clip_ancient_tree_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_ancient_tree_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_ancient_tree_2.addFeatures(features_clip_ancient_tree_2);
var lyr_clip_ancient_tree_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_ancient_tree_2, 
                style: style_clip_ancient_tree_2,
                popuplayertitle: 'clip_ancient_tree',
                interactive: true,
                title: '<img src="styles/legend/clip_ancient_tree_2.png" /> clip_ancient_tree'
            });
var format_clip_forest_inventory_3 = new ol.format.GeoJSON();
var features_clip_forest_inventory_3 = format_clip_forest_inventory_3.readFeatures(json_clip_forest_inventory_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_forest_inventory_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_forest_inventory_3.addFeatures(features_clip_forest_inventory_3);
var lyr_clip_forest_inventory_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_forest_inventory_3, 
                style: style_clip_forest_inventory_3,
                popuplayertitle: 'clip_forest_inventory',
                interactive: true,
                title: '<img src="styles/legend/clip_forest_inventory_3.png" /> clip_forest_inventory'
            });

lyr_OSMStandard_0.setVisible(true);lyr_clip_parishes3_1.setVisible(true);lyr_clip_ancient_tree_2.setVisible(true);lyr_clip_forest_inventory_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_clip_parishes3_1,lyr_clip_ancient_tree_2,lyr_clip_forest_inventory_3];
lyr_clip_parishes3_1.set('fieldAliases', {'PAR24CD': 'PAR24CD', 'PAR24NM': 'PAR24NM', 'PAR24NMW': 'PAR24NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_clip_ancient_tree_2.set('fieldAliases', {'Id': 'Id', 'SurveyDate': 'SurveyDate', 'VerifiedDa': 'VerifiedDa', 'MeasuredGi': 'MeasuredGi', 'MeasuredHe': 'MeasuredHe', 'EstimatedG': 'EstimatedG', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GridRefere': 'GridRefere', 'Species': 'Species', 'TreeForm': 'TreeForm', 'RecorderOr': 'RecorderOr', 'LocalName': 'LocalName', 'Town': 'Town', 'County': 'County', 'Country': 'Country', 'StandingSt': 'StandingSt', 'LivingStat': 'LivingStat', 'PublicAcce': 'PublicAcce', 'VeteranSta': 'VeteranSta', 'Protection': 'Protection', 'SpecialSta': 'SpecialSta', 'Epiphyte': 'Epiphyte', 'Fungus': 'Fungus', 'Condition_': 'Condition_', });
lyr_clip_forest_inventory_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CATEGORY': 'CATEGORY', 'IFT_IOA': 'IFT_IOA', 'COUNTRY': 'COUNTRY', 'Area_Ha': 'Area_Ha', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'ADVICE': 'ADVICE', });
lyr_clip_parishes3_1.set('fieldImages', {'PAR24CD': 'TextEdit', 'PAR24NM': 'TextEdit', 'PAR24NMW': 'TextEdit', 'BNG_E': 'TextEdit', 'BNG_N': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_clip_ancient_tree_2.set('fieldImages', {'Id': 'TextEdit', 'SurveyDate': 'DateTime', 'VerifiedDa': 'DateTime', 'MeasuredGi': 'TextEdit', 'MeasuredHe': 'TextEdit', 'EstimatedG': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GridRefere': 'TextEdit', 'Species': 'TextEdit', 'TreeForm': 'TextEdit', 'RecorderOr': 'TextEdit', 'LocalName': 'TextEdit', 'Town': 'TextEdit', 'County': 'TextEdit', 'Country': 'TextEdit', 'StandingSt': 'TextEdit', 'LivingStat': 'TextEdit', 'PublicAcce': 'TextEdit', 'VeteranSta': 'TextEdit', 'Protection': 'TextEdit', 'SpecialSta': 'TextEdit', 'Epiphyte': 'TextEdit', 'Fungus': 'TextEdit', 'Condition_': 'TextEdit', });
lyr_clip_forest_inventory_3.set('fieldImages', {'OBJECTID': 'Range', 'CATEGORY': 'TextEdit', 'IFT_IOA': 'TextEdit', 'COUNTRY': 'TextEdit', 'Area_Ha': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'ADVICE': 'TextEdit', });
lyr_clip_parishes3_1.set('fieldLabels', {'PAR24CD': 'hidden field', 'PAR24NM': 'hidden field', 'PAR24NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LONG': 'hidden field', 'LAT': 'hidden field', 'GlobalID': 'hidden field', });
lyr_clip_ancient_tree_2.set('fieldLabels', {'Id': 'hidden field', 'SurveyDate': 'hidden field', 'VerifiedDa': 'hidden field', 'MeasuredGi': 'hidden field', 'MeasuredHe': 'hidden field', 'EstimatedG': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GridRefere': 'hidden field', 'Species': 'inline label - always visible', 'TreeForm': 'hidden field', 'RecorderOr': 'hidden field', 'LocalName': 'hidden field', 'Town': 'hidden field', 'County': 'hidden field', 'Country': 'hidden field', 'StandingSt': 'hidden field', 'LivingStat': 'hidden field', 'PublicAcce': 'hidden field', 'VeteranSta': 'hidden field', 'Protection': 'hidden field', 'SpecialSta': 'hidden field', 'Epiphyte': 'hidden field', 'Fungus': 'hidden field', 'Condition_': 'hidden field', });
lyr_clip_forest_inventory_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'CATEGORY': 'inline label - always visible', 'IFT_IOA': 'hidden field', 'COUNTRY': 'hidden field', 'Area_Ha': 'hidden field', 'Shape__Are': 'hidden field', 'Shape__Len': 'hidden field', 'ADVICE': 'inline label - always visible', });
lyr_clip_forest_inventory_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});