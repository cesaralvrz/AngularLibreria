import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listadoLibros = [{"isbn":"358836522-2","titulo":"eros suspendisse accumsan tortor quis turpis sed ante","autor":"Tamarah Chellam","editorial":"Camimbo","precio":"€4,50","categoria":"novela","fecha_lanzamiento":"09/24/2011","oferta":false,"unidades_vendidas":5856},
  {"isbn":"705088350-6","titulo":"erat fermentum justo nec condimentum neque sapien placerat ante nulla","autor":"Margarethe Marquot","editorial":"Feednation","precio":"€4,77","categoria":"suspense","fecha_lanzamiento":"01/23/2021","oferta":false,"unidades_vendidas":6271},
  {"isbn":"543172753-2","titulo":"pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis","autor":"Rainer Anthoine","editorial":"Feedfish","precio":"€0,02","categoria":"informatica","fecha_lanzamiento":"07/17/2020","oferta":false,"unidades_vendidas":1103},
  {"isbn":"546838483-3","titulo":"non velit donec diam neque vestibulum eget vulputate ut","autor":"Rafaelia Conichie","editorial":"Rooxo","precio":"€0,08","categoria":"novela","fecha_lanzamiento":"09/23/2020","oferta":true,"unidades_vendidas":1855},
  {"isbn":"327138864-4","titulo":"placerat praesent blandit nam nulla integer pede","autor":"Shep Mettricke","editorial":"Zooxo","precio":"€9,05","categoria":"novela","fecha_lanzamiento":"01/13/2017","oferta":true,"unidades_vendidas":9732},
  {"isbn":"699715617-7","titulo":"ipsum dolor sit amet consectetuer","autor":"Jayme Batts","editorial":"Jamia","precio":"€8,99","categoria":"autoayuda","fecha_lanzamiento":"03/29/2018","oferta":true,"unidades_vendidas":4717},
  {"isbn":"164220153-7","titulo":"massa tempor convallis nulla neque libero convallis eget","autor":"Durante Yakunchikov","editorial":"Feedbug","precio":"€0,15","categoria":"novela","fecha_lanzamiento":"01/03/2014","oferta":true,"unidades_vendidas":6844},
  {"isbn":"288597131-2","titulo":"ac nibh fusce lacus purus aliquet","autor":"Rosalyn Quinnet","editorial":"Topicshots","precio":"€0,45","categoria":"infantil","fecha_lanzamiento":"03/10/2012","oferta":false,"unidades_vendidas":7763},
  {"isbn":"637653912-2","titulo":"libero ut massa volutpat convallis morbi odio","autor":"Laurie Lempel","editorial":"Wordware","precio":"€4,81","categoria":"informatica","fecha_lanzamiento":"03/07/2018","oferta":true,"unidades_vendidas":6273},
  {"isbn":"270330738-1","titulo":"et ultrices posuere cubilia curae","autor":"Gil Coggins","editorial":"Twimbo","precio":"€9,40","categoria":"marketing","fecha_lanzamiento":"12/06/2010","oferta":true,"unidades_vendidas":7965},
  {"isbn":"891154951-7","titulo":"mus vivamus vestibulum sagittis sapien cum sociis","autor":"Alexis MacSkeaghan","editorial":"Zoombeat","precio":"€9,10","categoria":"marketing","fecha_lanzamiento":"04/15/2013","oferta":false,"unidades_vendidas":9415},
  {"isbn":"510769417-9","titulo":"amet erat nulla tempus vivamus in felis eu sapien","autor":"Olivero Kleinsinger","editorial":"Zoomcast","precio":"€8,15","categoria":"infantil","fecha_lanzamiento":"03/20/2014","oferta":false,"unidades_vendidas":6214},
  {"isbn":"421285387-6","titulo":"vestibulum vestibulum ante ipsum primis in faucibus orci luctus et","autor":"Brockie Mattinson","editorial":"Midel","precio":"€4,78","categoria":"informatica","fecha_lanzamiento":"07/17/2011","oferta":false,"unidades_vendidas":4046},
  {"isbn":"329932619-8","titulo":"dui vel nisl duis ac nibh fusce lacus purus","autor":"Agneta Ceci","editorial":"Dabtype","precio":"€9,77","categoria":"suspense","fecha_lanzamiento":"02/28/2015","oferta":true,"unidades_vendidas":4181},
  {"isbn":"431817399-2","titulo":"ullamcorper purus sit amet nulla quisque arcu libero rutrum","autor":"Nikki Castellini","editorial":"Edgeclub","precio":"€3,15","categoria":"infantil","fecha_lanzamiento":"10/08/2018","oferta":true,"unidades_vendidas":9050},
  {"isbn":"649876755-3","titulo":"venenatis non sodales sed tincidunt eu felis","autor":"Hedda Cheves","editorial":"Babbleblab","precio":"€6,05","categoria":"autoayuda","fecha_lanzamiento":"09/14/2013","oferta":true,"unidades_vendidas":7771},
  {"isbn":"069352342-5","titulo":"iaculis diam erat fermentum justo","autor":"Isis McGrirl","editorial":"Jabberstorm","precio":"€3,53","categoria":"marketing","fecha_lanzamiento":"02/04/2020","oferta":false,"unidades_vendidas":6397},
  {"isbn":"867587867-2","titulo":"pulvinar nulla pede ullamcorper augue a","autor":"Georgia Blodget","editorial":"Brainsphere","precio":"€2,64","categoria":"comic","fecha_lanzamiento":"10/08/2013","oferta":true,"unidades_vendidas":19},
  {"isbn":"571455084-6","titulo":"nunc commodo placerat praesent blandit nam nulla","autor":"Winslow Rosenhaupt","editorial":"Dablist","precio":"€8,46","categoria":"marketing","fecha_lanzamiento":"05/11/2019","oferta":false,"unidades_vendidas":8360},
  {"isbn":"727789813-3","titulo":"vestibulum quam sapien varius ut","autor":"Josie Gerriessen","editorial":"Demivee","precio":"€7,28","categoria":"marketing","fecha_lanzamiento":"03/21/2017","oferta":false,"unidades_vendidas":2889},
  {"isbn":"481910314-8","titulo":"donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin","autor":"Kristofor Ixor","editorial":"Yabox","precio":"€1,10","categoria":"informatica","fecha_lanzamiento":"02/19/2015","oferta":true,"unidades_vendidas":4196},
  {"isbn":"036898682-9","titulo":"sit amet consectetuer adipiscing elit","autor":"Eleen Jeannesson","editorial":"Dabshots","precio":"€5,15","categoria":"autoayuda","fecha_lanzamiento":"06/14/2015","oferta":false,"unidades_vendidas":4546},
  {"isbn":"518479486-7","titulo":"curabitur convallis duis consequat dui","autor":"Justinn Witchard","editorial":"Dynazzy","precio":"€4,01","categoria":"novela","fecha_lanzamiento":"01/09/2020","oferta":true,"unidades_vendidas":3391},
  {"isbn":"019414166-7","titulo":"id nisl venenatis lacinia aenean sit amet justo","autor":"Collie O'Conor","editorial":"Tagchat","precio":"€3,20","categoria":"comic","fecha_lanzamiento":"04/04/2011","oferta":true,"unidades_vendidas":5636},
  {"isbn":"598810988-8","titulo":"congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae","autor":"Gran Pauly","editorial":"Jabberbean","precio":"€1,20","categoria":"autoayuda","fecha_lanzamiento":"01/23/2014","oferta":true,"unidades_vendidas":4600},
  {"isbn":"534153695-9","titulo":"morbi odio odio elementum eu interdum eu tincidunt","autor":"Sigfrid Petersen","editorial":"Jabbercube","precio":"€4,45","categoria":"informatica","fecha_lanzamiento":"08/14/2013","oferta":false,"unidades_vendidas":985},
  {"isbn":"532671748-4","titulo":"morbi a ipsum integer a nibh in quis","autor":"Deirdre Brockbank","editorial":"Zava","precio":"€8,57","categoria":"infantil","fecha_lanzamiento":"09/02/2011","oferta":true,"unidades_vendidas":4949},
  {"isbn":"905221368-2","titulo":"vivamus vestibulum sagittis sapien cum sociis","autor":"Dolly Biskupek","editorial":"Fiveclub","precio":"€8,49","categoria":"infantil","fecha_lanzamiento":"07/09/2013","oferta":true,"unidades_vendidas":1872},
  {"isbn":"418760463-4","titulo":"elit sodales scelerisque mauris sit amet eros","autor":"Annamaria Backshill","editorial":"Voonyx","precio":"€6,93","categoria":"comic","fecha_lanzamiento":"06/03/2016","oferta":false,"unidades_vendidas":147},
  {"isbn":"863349985-1","titulo":"odio elementum eu interdum eu tincidunt","autor":"Moria Ambrus","editorial":"Skalith","precio":"€8,74","categoria":"infantil","fecha_lanzamiento":"06/03/2019","oferta":false,"unidades_vendidas":8824},
  {"isbn":"049864842-7","titulo":"pede lobortis ligula sit amet eleifend pede libero quis orci","autor":"Jeffy Veque","editorial":"Zoomzone","precio":"€5,17","categoria":"novela","fecha_lanzamiento":"10/22/2019","oferta":false,"unidades_vendidas":1488},
  {"isbn":"505586092-8","titulo":"non quam nec dui luctus rutrum","autor":"Christophe Mogie","editorial":"Skimia","precio":"€2,21","categoria":"autoayuda","fecha_lanzamiento":"12/05/2015","oferta":false,"unidades_vendidas":4638},
  {"isbn":"138254363-8","titulo":"euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula","autor":"Nap Syfax","editorial":"Wikido","precio":"€5,21","categoria":"marketing","fecha_lanzamiento":"03/05/2010","oferta":true,"unidades_vendidas":3088},
  {"isbn":"130589830-3","titulo":"id mauris vulputate elementum nullam varius nulla facilisi cras","autor":"Adaline Sands-Allan","editorial":"Flipopia","precio":"€8,74","categoria":"autoayuda","fecha_lanzamiento":"06/26/2016","oferta":true,"unidades_vendidas":2088},
  {"isbn":"914637306-3","titulo":"ultricies eu nibh quisque id justo sit","autor":"Row Frame","editorial":"Edgetag","precio":"€6,50","categoria":"marketing","fecha_lanzamiento":"02/25/2018","oferta":true,"unidades_vendidas":8522},
  {"isbn":"896743591-6","titulo":"ornare consequat lectus in est risus","autor":"Gustave Kamall","editorial":"Buzzshare","precio":"€7,69","categoria":"comic","fecha_lanzamiento":"12/30/2016","oferta":false,"unidades_vendidas":756},
  {"isbn":"919427565-3","titulo":"ornare imperdiet sapien urna pretium nisl ut volutpat","autor":"Nerty Gwyneth","editorial":"Linkbuzz","precio":"€5,60","categoria":"marketing","fecha_lanzamiento":"03/28/2014","oferta":false,"unidades_vendidas":5963},
  {"isbn":"142732195-7","titulo":"nisl nunc rhoncus dui vel sem","autor":"Shawnee Fulmen","editorial":"Brainverse","precio":"€9,64","categoria":"novela","fecha_lanzamiento":"02/27/2020","oferta":false,"unidades_vendidas":6855},
  {"isbn":"225131525-X","titulo":"sodales sed tincidunt eu felis fusce posuere felis sed lacus","autor":"Lorraine Stayte","editorial":"Browsezoom","precio":"€9,32","categoria":"informatica","fecha_lanzamiento":"01/22/2012","oferta":true,"unidades_vendidas":8678},
  {"isbn":"527376552-8","titulo":"fermentum donec ut mauris eget massa tempor","autor":"Dasya Merrill","editorial":"Flashspan","precio":"€1,36","categoria":"novela","fecha_lanzamiento":"12/30/2013","oferta":true,"unidades_vendidas":8446},
  {"isbn":"704862295-4","titulo":"libero rutrum ac lobortis vel dapibus at diam nam","autor":"Simonne Bowton","editorial":"Browsetype","precio":"€1,35","categoria":"infantil","fecha_lanzamiento":"06/12/2013","oferta":true,"unidades_vendidas":3701},
  {"isbn":"296612655-8","titulo":"fusce congue diam id ornare imperdiet sapien","autor":"Kristel Artiss","editorial":"Roomm","precio":"€2,77","categoria":"suspense","fecha_lanzamiento":"01/09/2018","oferta":false,"unidades_vendidas":5810},
  {"isbn":"901974258-2","titulo":"libero non mattis pulvinar nulla pede ullamcorper augue a","autor":"Marietta Reveland","editorial":"Photolist","precio":"€8,30","categoria":"suspense","fecha_lanzamiento":"10/16/2015","oferta":false,"unidades_vendidas":508},
  {"isbn":"212998465-7","titulo":"dignissim vestibulum vestibulum ante ipsum","autor":"Conroy Josipovic","editorial":"Myworks","precio":"€6,91","categoria":"informatica","fecha_lanzamiento":"06/26/2020","oferta":true,"unidades_vendidas":6146},
  {"isbn":"599937691-2","titulo":"mi nulla ac enim in tempor turpis nec euismod","autor":"Salvatore Cicconetti","editorial":"Muxo","precio":"€2,65","categoria":"novela","fecha_lanzamiento":"04/14/2017","oferta":false,"unidades_vendidas":2641},
  {"isbn":"001191008-9","titulo":"nascetur ridiculus mus vivamus vestibulum","autor":"Avigdor Kores","editorial":"Digitube","precio":"€6,41","categoria":"comic","fecha_lanzamiento":"09/18/2012","oferta":true,"unidades_vendidas":2764},
  {"isbn":"036694374-X","titulo":"blandit ultrices enim lorem ipsum dolor sit amet consectetuer","autor":"Niccolo Boller","editorial":"Mynte","precio":"€8,94","categoria":"marketing","fecha_lanzamiento":"10/27/2012","oferta":true,"unidades_vendidas":9286},
  {"isbn":"287735257-9","titulo":"vulputate luctus cum sociis natoque penatibus","autor":"Nanon Tween","editorial":"Pixonyx","precio":"€2,40","categoria":"suspense","fecha_lanzamiento":"06/23/2015","oferta":false,"unidades_vendidas":3619},
  {"isbn":"437473144-X","titulo":"lectus in est risus auctor sed tristique in tempus","autor":"Karlik Foyle","editorial":"Fadeo","precio":"€1,90","categoria":"comic","fecha_lanzamiento":"04/04/2012","oferta":false,"unidades_vendidas":6100},
  {"isbn":"416466793-1","titulo":"lacus at velit vivamus vel nulla eget eros elementum","autor":"Susi Goody","editorial":"Quinu","precio":"€6,68","categoria":"suspense","fecha_lanzamiento":"03/06/2010","oferta":true,"unidades_vendidas":6009},
  {"isbn":"099287227-8","titulo":"odio consequat varius integer ac leo pellentesque","autor":"Sinclair Deeney","editorial":"Einti","precio":"€4,29","categoria":"informatica","fecha_lanzamiento":"08/25/2017","oferta":true,"unidades_vendidas":9290},
  {"isbn":"920593084-9","titulo":"eget semper rutrum nulla nunc purus phasellus","autor":"Jade Gethyn","editorial":"Skippad","precio":"€3,00","categoria":"suspense","fecha_lanzamiento":"05/09/2011","oferta":false,"unidades_vendidas":7554},
  {"isbn":"368461413-0","titulo":"consequat morbi a ipsum integer","autor":"Wilhelmine Ceeley","editorial":"Twitterbeat","precio":"€6,68","categoria":"suspense","fecha_lanzamiento":"11/17/2017","oferta":false,"unidades_vendidas":2450},
  {"isbn":"674302971-8","titulo":"ullamcorper augue a suscipit nulla elit ac","autor":"Ewell Micklewright","editorial":"Buzzbean","precio":"€2,37","categoria":"novela","fecha_lanzamiento":"09/22/2015","oferta":true,"unidades_vendidas":5427},
  {"isbn":"909706126-1","titulo":"in porttitor pede justo eu massa donec","autor":"Albertine Caslane","editorial":"Zoonoodle","precio":"€8,02","categoria":"marketing","fecha_lanzamiento":"05/17/2015","oferta":false,"unidades_vendidas":9399},
  {"isbn":"945756536-3","titulo":"sit amet sem fusce consequat nulla","autor":"Mitch Feore","editorial":"Omba","precio":"€2,90","categoria":"infantil","fecha_lanzamiento":"01/11/2020","oferta":true,"unidades_vendidas":4342},
  {"isbn":"274124408-1","titulo":"cras mi pede malesuada in imperdiet et commodo","autor":"Darbie Hazlewood","editorial":"Wordpedia","precio":"€5,84","categoria":"suspense","fecha_lanzamiento":"02/15/2013","oferta":false,"unidades_vendidas":2614},
  {"isbn":"479328356-X","titulo":"morbi porttitor lorem id ligula suspendisse ornare consequat","autor":"Rubetta Bendell","editorial":"Photofeed","precio":"€4,30","categoria":"marketing","fecha_lanzamiento":"04/02/2012","oferta":true,"unidades_vendidas":1709},
  {"isbn":"261524176-1","titulo":"ac lobortis vel dapibus at diam nam tristique","autor":"Helaine Mendonca","editorial":"Brainverse","precio":"€9,31","categoria":"informatica","fecha_lanzamiento":"07/14/2014","oferta":true,"unidades_vendidas":9670},
  {"isbn":"904466525-1","titulo":"dui nec nisi volutpat eleifend donec ut dolor","autor":"Davide Simms","editorial":"Skidoo","precio":"€1,49","categoria":"autoayuda","fecha_lanzamiento":"09/13/2015","oferta":false,"unidades_vendidas":7907},
  {"isbn":"005697156-7","titulo":"turpis a pede posuere nonummy integer non velit donec","autor":"Arden Bilbie","editorial":"Photojam","precio":"€9,72","categoria":"infantil","fecha_lanzamiento":"12/11/2019","oferta":false,"unidades_vendidas":3763},
  {"isbn":"191503517-1","titulo":"volutpat in congue etiam justo etiam pretium iaculis","autor":"Shannen Salvati","editorial":"Eidel","precio":"€4,50","categoria":"suspense","fecha_lanzamiento":"04/26/2017","oferta":false,"unidades_vendidas":7107},
  {"isbn":"632928113-0","titulo":"porttitor id consequat in consequat ut nulla sed accumsan felis","autor":"Ruprecht Denholm","editorial":"Feednation","precio":"€6,00","categoria":"informatica","fecha_lanzamiento":"11/08/2016","oferta":true,"unidades_vendidas":5818},
  {"isbn":"834605469-6","titulo":"ullamcorper augue a suscipit nulla elit ac","autor":"Sheridan Rosenblath","editorial":"Ainyx","precio":"€1,48","categoria":"marketing","fecha_lanzamiento":"07/04/2016","oferta":true,"unidades_vendidas":5128},
  {"isbn":"854651742-8","titulo":"nibh in hac habitasse platea dictumst aliquam","autor":"Buddie Skillern","editorial":"Npath","precio":"€4,96","categoria":"suspense","fecha_lanzamiento":"07/20/2020","oferta":true,"unidades_vendidas":334},
  {"isbn":"191972637-3","titulo":"et magnis dis parturient montes nascetur ridiculus mus etiam","autor":"Vikky Arthur","editorial":"Skimia","precio":"€8,76","categoria":"informatica","fecha_lanzamiento":"08/27/2014","oferta":false,"unidades_vendidas":1420},
  {"isbn":"547504100-8","titulo":"posuere metus vitae ipsum aliquam","autor":"Renado Bickers","editorial":"Bubblemix","precio":"€2,75","categoria":"marketing","fecha_lanzamiento":"11/26/2014","oferta":false,"unidades_vendidas":5251},
  {"isbn":"315666915-6","titulo":"justo pellentesque viverra pede ac diam","autor":"Nicky Rillett","editorial":"Jaloo","precio":"€7,64","categoria":"autoayuda","fecha_lanzamiento":"05/17/2017","oferta":false,"unidades_vendidas":8363},
  {"isbn":"979083006-8","titulo":"eu sapien cursus vestibulum proin eu mi nulla","autor":"Erina Millsap","editorial":"Edgepulse","precio":"€8,73","categoria":"novela","fecha_lanzamiento":"12/03/2015","oferta":true,"unidades_vendidas":920},
  {"isbn":"417196832-1","titulo":"quam pede lobortis ligula sit amet","autor":"Loleta Kail","editorial":"Izio","precio":"€9,59","categoria":"marketing","fecha_lanzamiento":"11/13/2018","oferta":false,"unidades_vendidas":2866},
  {"isbn":"924694466-6","titulo":"tortor quis turpis sed ante","autor":"Eddie De Francesco","editorial":"Linklinks","precio":"€8,73","categoria":"marketing","fecha_lanzamiento":"08/25/2015","oferta":false,"unidades_vendidas":8},
  {"isbn":"223645574-7","titulo":"metus vitae ipsum aliquam non mauris morbi non","autor":"Vinnie Southgate","editorial":"Thoughtstorm","precio":"€4,59","categoria":"comic","fecha_lanzamiento":"09/21/2018","oferta":true,"unidades_vendidas":2909},
  {"isbn":"449808107-2","titulo":"lorem quisque ut erat curabitur","autor":"Codi Mariaud","editorial":"Tagcat","precio":"€0,91","categoria":"comic","fecha_lanzamiento":"08/06/2012","oferta":true,"unidades_vendidas":3175},
  {"isbn":"563845249-4","titulo":"morbi vestibulum velit id pretium iaculis diam erat fermentum","autor":"Erhard Cleatherow","editorial":"Jayo","precio":"€4,63","categoria":"marketing","fecha_lanzamiento":"03/21/2014","oferta":false,"unidades_vendidas":7970},
  {"isbn":"557843333-2","titulo":"interdum mauris ullamcorper purus sit","autor":"Danila Etches","editorial":"Twitterwire","precio":"€8,19","categoria":"marketing","fecha_lanzamiento":"02/20/2014","oferta":true,"unidades_vendidas":1965},
  {"isbn":"574146597-8","titulo":"id mauris vulputate elementum nullam","autor":"Odo Fleckno","editorial":"Wordpedia","precio":"€0,41","categoria":"comic","fecha_lanzamiento":"05/20/2015","oferta":false,"unidades_vendidas":6614},
  {"isbn":"358690961-6","titulo":"est risus auctor sed tristique in tempus sit amet sem","autor":"Pandora Downs","editorial":"Kwilith","precio":"€8,96","categoria":"autoayuda","fecha_lanzamiento":"11/05/2010","oferta":true,"unidades_vendidas":2353},
  {"isbn":"364386669-0","titulo":"facilisi cras non velit nec nisi","autor":"Percival Stoeckle","editorial":"Buzzbean","precio":"€7,12","categoria":"suspense","fecha_lanzamiento":"02/21/2016","oferta":false,"unidades_vendidas":401},
  {"isbn":"002678302-9","titulo":"lectus suspendisse potenti in eleifend quam a odio","autor":"Evelyn Oneile","editorial":"Yamia","precio":"€7,09","categoria":"autoayuda","fecha_lanzamiento":"07/08/2010","oferta":false,"unidades_vendidas":7495},
  {"isbn":"062157090-7","titulo":"potenti in eleifend quam a odio","autor":"Hirsch Cranmere","editorial":"Einti","precio":"€1,11","categoria":"autoayuda","fecha_lanzamiento":"07/20/2017","oferta":true,"unidades_vendidas":3849},
  {"isbn":"858073581-5","titulo":"at velit vivamus vel nulla","autor":"Fields Adamou","editorial":"Twitterworks","precio":"€6,32","categoria":"novela","fecha_lanzamiento":"09/26/2012","oferta":false,"unidades_vendidas":9238},
  {"isbn":"333343282-X","titulo":"in felis donec semper sapien a libero nam","autor":"Ferrel Pedican","editorial":"Linkbridge","precio":"€9,38","categoria":"novela","fecha_lanzamiento":"04/13/2016","oferta":false,"unidades_vendidas":6458},
  {"isbn":"028972118-0","titulo":"nulla integer pede justo lacinia eget tincidunt eget","autor":"Humfrid Wolstencroft","editorial":"Kanoodle","precio":"€9,31","categoria":"infantil","fecha_lanzamiento":"10/26/2018","oferta":false,"unidades_vendidas":520},
  {"isbn":"073026367-3","titulo":"id nulla ultrices aliquet maecenas leo odio","autor":"Marlena Rosario","editorial":"Agimba","precio":"€7,69","categoria":"suspense","fecha_lanzamiento":"12/25/2016","oferta":true,"unidades_vendidas":59},
  {"isbn":"997419539-X","titulo":"dictumst etiam faucibus cursus urna ut tellus nulla ut erat","autor":"Woody Shanks","editorial":"Einti","precio":"€9,78","categoria":"infantil","fecha_lanzamiento":"03/26/2015","oferta":false,"unidades_vendidas":6267},
  {"isbn":"728736518-9","titulo":"phasellus in felis donec semper sapien a libero","autor":"Garek Ghidotti","editorial":"Avamm","precio":"€8,69","categoria":"autoayuda","fecha_lanzamiento":"07/13/2015","oferta":true,"unidades_vendidas":9230},
  {"isbn":"095143244-3","titulo":"eleifend quam a odio in hac habitasse platea dictumst","autor":"Babbette Burtonwood","editorial":"Tagopia","precio":"€6,48","categoria":"autoayuda","fecha_lanzamiento":"02/05/2017","oferta":false,"unidades_vendidas":6981},
  {"isbn":"583212483-9","titulo":"ligula suspendisse ornare consequat lectus in est risus","autor":"Valentijn Yackiminie","editorial":"Livefish","precio":"€0,38","categoria":"marketing","fecha_lanzamiento":"06/28/2011","oferta":false,"unidades_vendidas":2582},
  {"isbn":"841504557-3","titulo":"consequat metus sapien ut nunc vestibulum ante ipsum primis","autor":"Dyna Culley","editorial":"Linktype","precio":"€1,82","categoria":"comic","fecha_lanzamiento":"04/12/2020","oferta":false,"unidades_vendidas":8058},
  {"isbn":"350958180-6","titulo":"convallis eget eleifend luctus ultricies eu nibh quisque id justo","autor":"Lief Deam","editorial":"Gabcube","precio":"€0,28","categoria":"infantil","fecha_lanzamiento":"06/06/2019","oferta":true,"unidades_vendidas":5282},
  {"isbn":"679647469-4","titulo":"pede malesuada in imperdiet et commodo vulputate","autor":"Miles Ife","editorial":"Babbleblab","precio":"€7,19","categoria":"infantil","fecha_lanzamiento":"08/14/2014","oferta":true,"unidades_vendidas":6858},
  {"isbn":"738100517-4","titulo":"iaculis diam erat fermentum justo nec","autor":"Piotr Mingo","editorial":"Fivespan","precio":"€4,73","categoria":"marketing","fecha_lanzamiento":"08/03/2019","oferta":true,"unidades_vendidas":5300},
  {"isbn":"129475671-0","titulo":"porta volutpat erat quisque erat eros viverra eget congue","autor":"Antonin Gaywood","editorial":"Realmix","precio":"€1,59","categoria":"novela","fecha_lanzamiento":"03/08/2018","oferta":false,"unidades_vendidas":3613},
  {"isbn":"570321998-1","titulo":"orci luctus et ultrices posuere cubilia","autor":"Perle McQuorkel","editorial":"Yodo","precio":"€8,54","categoria":"comic","fecha_lanzamiento":"12/25/2014","oferta":true,"unidades_vendidas":2532},
  {"isbn":"836917403-5","titulo":"id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum","autor":"Viviyan Roelofs","editorial":"Twitternation","precio":"€5,33","categoria":"suspense","fecha_lanzamiento":"12/08/2017","oferta":true,"unidades_vendidas":771},
  {"isbn":"327755117-2","titulo":"sagittis nam congue risus semper porta volutpat quam pede","autor":"Michaela Bollard","editorial":"Photobean","precio":"€8,43","categoria":"informatica","fecha_lanzamiento":"04/17/2010","oferta":false,"unidades_vendidas":2840},
  {"isbn":"200839019-5","titulo":"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem","autor":"Farlie Skillitt","editorial":"Tagchat","precio":"€3,75","categoria":"infantil","fecha_lanzamiento":"04/03/2014","oferta":true,"unidades_vendidas":5882},
  {"isbn":"823913342-8","titulo":"in faucibus orci luctus et ultrices posuere cubilia curae duis","autor":"Nickola Franzel","editorial":"Photolist","precio":"€9,01","categoria":"comic","fecha_lanzamiento":"08/25/2020","oferta":false,"unidades_vendidas":5986},
  {"isbn":"063661096-9","titulo":"ipsum dolor sit amet consectetuer","autor":"Sheila Cappel","editorial":"Brainsphere","precio":"€5,37","categoria":"autoayuda","fecha_lanzamiento":"03/23/2020","oferta":true,"unidades_vendidas":6055},
  {"isbn":"828292846-1","titulo":"mi pede malesuada in imperdiet et commodo vulputate","autor":"Savina Lempel","editorial":"Skyndu","precio":"€6,57","categoria":"informatica","fecha_lanzamiento":"08/23/2015","oferta":false,"unidades_vendidas":7878}];

  constructor() { }

  obtenerLibros(){
    return this.listadoLibros;
  }

  obtenerLibro(isbn){
    return this.listadoLibros.find(libro => libro.isbn === isbn);
  }

  obtenerNovedades(){

    return this.listadoLibros.sort( (a,b) => {

      if (new Date(a.fecha_lanzamiento).getTime() < new Date(b.fecha_lanzamiento).getTime()){

        return 1;

      }

      if (new Date(a.fecha_lanzamiento).getTime() > new Date(b.fecha_lanzamiento).getTime()){

        return -1;

      }

      return 0;

    }).slice(0,10); //devolvemos los 10 primeros libros

  }

  obtenerMasVendidos(){

    return this.listadoLibros.sort( (a,b) => {

      if (a.unidades_vendidas < b.unidades_vendidas){

        return 1;

      }

      if (a.unidades_vendidas > b.unidades_vendidas){

        return -1;

      }

      return 0;

    }).slice(0,10); //devolvemos los 10 primeros libros

  }


}
