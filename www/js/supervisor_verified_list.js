$(document).on('pageshow', '#supervisor_verified_list', function(){  
//alert("supervisor_verified_list one");
$('#list_align_verified').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashinv').on('click', '#dashinv', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinv').on('click', '#inprogressinv', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

$(document).off('click', '#verifiedinv').on('click', '#verifiedinv', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinv').on('click', '#not_verifiedinv', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinv').on('click', '#completedinv', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinv').on('click', '#signoutinv', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
sup_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_array"));
employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
/*  view_assigned_address_download_array =  JSON.parse(sessionStorage.getItem("view_assigned_address_download_array"));*/
assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));
supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));
distributor_verification_array =  JSON.parse(sessionStorage.getItem("distributor_verification_array"));
distributor_details_array =  JSON.parse(sessionStorage.getItem("distributor_details_array"));

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinv").text(username);

var superempty=sup_verified_array;

if(superempty == ""){
  alert('No record Found');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<sup_verified_array.length;a++){
  superr_objj = sup_verified_array[a];
// alert(superr_objj.verification_user_id+'superArray'+superr_objj.type);
var sup=superr_objj.name;
qualification_id=superr_objj.type;

var date_new=superr_objj.assigned_on;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();

if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+superr_objj.name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><span class="li_span">'+superr_objj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')"  class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+superr_objj.name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><span class="li_span">'+superr_objj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+superr_objj.name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><span class="li_span">'+superr_objj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.taskname+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);
}

/*address*/
if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);

}
/*bank*/
if(qualification_id == '27' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*assest*/
if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);
}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);
}

/*distributor residential address verification*/
if(qualification_id == '40' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);

}

/*distributor details*/
if(qualification_id == '41' ){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpv('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+superr_objj.First_Name+''+superr_objj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+superr_objj.verification_for+'</p><p class="li_p">'+superr_objj.task_name+'</p><p class="li_p">'+superr_objj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+superr_objj.verification_user_id+'</b></a></li>'

$('#list_align_verified').append(lis);

}

}

}

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
/*for(a=0;a<superArray_array.length;a++){
  super_obja = superArray_array[a];

  $("#supervisor_name_verilist").text(super_obja.First_Name);
  $("#city_name_verilist").text(super_obja.city_name);
}
*/


});



function callnextpv(index){

  superr_objj = sup_verified_array[index];
  qualification_id =superr_objj.type;
//alert(qualification_id);

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<addressid_records_array.length;a++){
  address_obj = addressid_records_array[a];

  superr_objj = sup_verified_array[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =superr_objj.verification_user_id;

  if( h == g && hadd == qualification_id ){
    address_obja = addressid_records_array[a];

  }

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<educational_records_array.length;a++){
  eductional_obj = educational_records_array[a];

  superr_objj = sup_verified_array[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(h+'hh');
g =superr_objj.verification_user_id;
//alert(g+'gg');
if( h == g && hedu == qualification_id){
  eductional_objq = educational_records_array[a];
//alert(eductional_objq.user_id+'educational_records_arrayeducational_records_array'+g);
}

}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<employment_records_array.length;a++){
  employment_obj = employment_records_array[a];


  superr_objj = sup_verified_array[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =superr_objj.verification_user_id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = employment_records_array[a];

//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}




var final = supervisor_final_command_array;
//alert(final);
if( final !== null){
for(a=0;a<supervisor_final_command_array.length;a++){
  supervisor_final_command = supervisor_final_command_array[a];
  superr_objj = sup_verified_array[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  supervisor_final_commanda = supervisor_final_command_array[a];
 //alert(supervisor_final_commanda.verification_id);
}

}
}


if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
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

  superr_objj = sup_verified_array[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
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

  superr_objj = sup_verified_array[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.acc_mode;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '40' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_verification_array.length;a++){
  distr_residential = distributor_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =distr_residential.user_id;
  huemploy=distr_residential.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  distr_residentiala = distributor_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '41' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_details_array.length;a++){
  dist_details = distributor_details_array[a];

  superr_objj = sup_verified_array[index];
  hj =dist_details.user_id;
  huemploy=dist_details.address_group;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  dist_detailsa = distributor_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  superr_objj = sup_verified_array[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.propert_type;
//alert(h+'hh');
gj =superr_objj.verification_user_id;
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
var distr_residentiala=distr_residentiala;
var dist_detailsa=dist_detailsa;

var bank_inpro=bank_inpro;
var assest_inpro=assest_inpro;

var supervisor_final_commanda=supervisor_final_commanda;
var eductional_objq=eductional_objq;
var employment_objad=employment_objad;
var address_obja=address_obja;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}


if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("referencea",JSON.stringify(referencea));

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("referencea",JSON.stringify(referencea));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '29' || qualification_id == '30' || qualification_id == '31'){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '27' ){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));

  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob assest succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '40' ){
if(supervisor_final_commanda !== undefined){
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));

  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}


if(qualification_id == '41' ){
if(supervisor_final_commanda !== undefined){

sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
$.mobile.changePage($('#pagedesign_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}


}