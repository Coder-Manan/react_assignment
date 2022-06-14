let selected_interests = [];

function changeInterests(interest){
    for (let i = 0; i < selected_interests.length; i++) {
        if (selected_interests[i] == interest){
            console.log("deleting");
            document.getElementById(interest).className="unselected";
            selected_interests = selected_interests.filter((y)=>y!=interest);
            return;
        }
    }
    selected_interests.push(interest);
    console.log(selected_interests);
    document.getElementById(interest).className="selected";
}

export default changeInterests;
export {selected_interests};