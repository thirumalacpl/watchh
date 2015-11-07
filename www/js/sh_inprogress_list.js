$(document).on('pageshow', '#sh_inprogress_list', function(){  
//alert("sh_inprogress_list one");
$('#lis_sh_inpro').empty();
//alert("supervisor_list_view");

 $(document).off('click', '#dashcooiuoii').on('click', '#dashcooiuoii', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#erdsf').on('click', '#erdsf', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 $(document).off('click', '#inprogresscooiuoii').on('click', '#inprogresscooiuoii', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#waitinguoii').on('click', '#waitinguoii', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapproveduoii').on('click', '#shapproveduoii', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedshuoiii').on('click', '#completedshuoiii', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                  $(document).off('click', '#shnotveriuoi').on('click', '#shnotveriuoi', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#rejectieiuoii').on('click', '#rejectieiuoii', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
return false;
});

                        $(document).off('click', '#verifaluoii').on('click', '#verifaluoii', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooiii').on('click', '#signoutcooiii', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  
   Inprogress_sh =  JSON.parse(sessionStorage.getItem("Inprogress_sh"));

   //employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    sh_addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));
    sh_educational_records_array =  JSON.parse(sessionStorage.getItem("sh_educational_records_array"));
     sh_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("sh_basic_profile_records_array"));

     sh_employment_records_array =  JSON.parse(sessionStorage.getItem("sh_employment_records_array"));

     supervisor_activity_log_array =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));

/*alert(assests_verification_array+'assests_verification_array');
alert(bankguarantee_verification_array+'bankguarantee_verification_array');
alert(address_verification_array+'address_verification_array');
alert(reference_verification_array+'reference_verification_array');*/

var superempty=Inprogress_sh;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<Inprogress_sh.length;a++){
  super_obj = Inprogress_sh[a];
 //alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.type;
//alert(qualification_id +'for');

var sup=super_obj.First_Name;
var date_new=super_obj.assigned_on;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+date+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'
$('#lis_sh_inpro').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);
}


/*address*/
if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);

}
/*bank*/
if(qualification_id == '27' || qualification_id == '28'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);

}

/*assest*/
if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);
}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shinprogresslist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_sh_inpro').append(lis);
}


}



}


});



function shinprogresslist(index){



  super_obj = Inprogress_sh[index];
  qualification_id =super_obj.type;
  user_ida=super_obj.verification_user_id;



//alert(qualification_id +'qualification_id');
//alert(user_ida +'user');

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<sh_addressid_records_array.length;a++){
  address_obj = sh_addressid_records_array[a];

  super_obj = Inprogress_sh[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.verification_user_id;

  if( h == g && hadd == qualification_id){
    address_objag = sh_addressid_records_array[a];
//alert(address_objag.user_id+'addressid_records_array');
}

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<sh_educational_records_array.length;a++){
  eductional_obj = sh_educational_records_array[a];

  super_obj = Inprogress_sh[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id);
 
g =super_obj.verification_user_id;
//alert(g+'gg');
//alert(h+'h'+g+'g');
//alert(hedu+'hedu'+qualification_id);
if( h == g && hedu == qualification_id){
//alert(h+'h'+g+'g'+'inside');
//alert(hedu+'hedu'+qualification_id+'inside');
  eductional_objaa = sh_educational_records_array[a];
  //alert(eductional_objaa+'edutype');

}

}
}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<sh_employment_records_array.length;a++){
  employment_obj = sh_employment_records_array[a];

  super_obj = Inprogress_sh[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.verification_user_id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = sh_employment_records_array[a];
//alert('employ');
//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}

//alert(supervisor_activity_log_array+'loggggggg');
var loggg=supervisor_activity_log_array;
//alert(loggg);
if(loggg == ''){
}else if(loggg !== null){
  for(a=0;a<supervisor_activity_log_array.length;a++){
    log_inpro_obj = supervisor_activity_log_array[a];

    super_inpro_obj = Inprogress_sh[index];
    hh =log_inpro_obj.verification_id;

    gg =super_inpro_obj.verification_user_id;

    if( hh == gg ){

      log_inpro_objg = supervisor_activity_log_array[a];
//alert(log_inpro_objg.verification_id+'llllllllllog');
}

}
}

if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  super_inpro_obj = Inprogress_sh[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  address_veriia = address_verification_array[a];
  //alert(address_veriia);
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('function reference id 32 to 35');
for(a=0;a<reference_verification_array.length;a++){
  reference = reference_verification_array[a];

  super_inpro_obj = Inprogress_sh[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  referencea = reference_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '27' ){
//alert('function bank id 27 to 28');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  super_inpro_obj = Inprogress_sh[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.acc_mode;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  super_inpro_obj = Inprogress_sh[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.propert_type;
//alert(h+'hh');
gj =super_obj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inproa = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

var bank_inproa=bank_inproa;
var assest_inproa=assest_inproa;
var address_veriia=address_veriia;
var referencea=referencea;



var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;
var log_inpro_objg=log_inpro_objg;
var supervisor_final_commanda=supervisor_final_commanda;


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
//alert('log current');
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
//alert('log current');
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
//alert('log current');
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '27' || qualification_id == '28'){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob assest succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_inprogress_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}



}