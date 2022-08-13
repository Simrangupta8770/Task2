const data=[["machine_name","machine_id","current","voltage","power_factor","active_power","apparent_power","reactive_power","daily_energy","monthly_energy","yearly_energy","idle_daily","idle_monthly","idle_yearly"],
 ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0], ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]];
 window.onload=function(){
var table=document.getElementById('tab');
function buildTable(data){
    
    for (let i = 1; i < data.length; i++) {
        var row='<tr>';
        for (let j = 0; j < data[i].length; j++) {
            row+="<td>"+data[i][j]+"</td>";
            
        }
        row+="</tr>";
        table.innerHTML+=row;
        
    }
    

}
buildTable(data);
 }