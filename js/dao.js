function daoCreateHabit(name, icon, color, description){
    const habit = {
        name:name,
        icon:icon,
        color:color,
        description:description,
        currentStreak:0,
        longestStreak:0,
        dates:{}
    }
    localStorage.setItem(name,JSON.stringify(habit))
}
function updateHabit(habitName, dates){
    var habit = getHabit(habitName);

    habit.dates = dates;
    localStorage.setItem(habitName,JSON.stringify(habit))
}
function getHabit(name){
    return JSON.parse(localStorage.getItem(name));// Json.parse creates a object out of a string with a objec-form
}
function getAllHabits(){
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    
    return values;
}
function removeHabit(name){
    localStorage.removeItem(name);
}
//Test function for debugging
function daoEcho(str){
    console.log(str);
}
//Code for creating a habit
// daoCreateHabit("Bowling", 
//     '<svg viewBox="-22 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m167.855469 239.792969v-69.9375c0-31.207031-19.445313-57.941407-46.84375-68.773438 10.378906-9.839843 16.871093-23.738281 16.871093-39.136719v-7.992187c0-29.75-24.203124-53.953125-53.953124-53.953125s-53.957032 24.203125-53.957032 53.953125v7.992187c0 15.398438 6.496094 29.296876 16.871094 39.136719-27.398438 10.832031-46.84375 37.566407-46.84375 68.773438v69.9375c0 20.804687 14.53125 38.265625 33.972656 42.804687v21.695313c0 5.515625 4.472656 9.988281 9.988282 9.988281 5.519531 0 9.992187-4.472656 9.992187-9.988281v-35.523438h59.949219v213.257813c0 5.507812-4.480469 9.988281-9.992188 9.988281-5.507812 0-9.992187-4.480469-9.992187-9.988281v-140.574219c0-5.515625-4.472657-9.992187-9.988281-9.992187-5.519532 0-9.992188 4.476562-9.992188 9.992187v140.570313c0 5.511718-4.484375 9.992187-9.992188 9.992187-5.507812 0-9.992187-4.480469-9.992187-9.992187v-101.628907c0-5.519531-4.472656-9.992187-9.992187-9.992187-5.515626 0-9.988282 4.472656-9.988282 9.992187v101.632813c0 16.527344 13.445313 29.972656 29.972656 29.972656 7.671876 0 14.675782-2.898438 19.984376-7.65625 5.304687 4.753906 12.308593 7.65625 19.980468 7.65625 16.527344 0 29.976563-13.445312 29.976563-29.972656v-199.429688c19.441406-4.539062 33.96875-22 33.96875-42.804687zm-117.898438-185.839844c0-18.730469 15.238281-33.96875 33.972657-33.96875 18.730468 0 33.96875 15.238281 33.96875 33.96875v7.992187c0 18.734376-15.238282 33.972657-33.96875 33.972657-18.734376 0-33.972657-15.238281-33.972657-33.972657zm3.996094 194.835937v-42.964843c0-5.515625-4.472656-9.992188-9.992187-9.992188-5.515626 0-9.988282 4.476563-9.988282 9.992188v55.761719c-8.246094-3.796876-13.988281-12.132813-13.988281-21.792969v-69.9375c0-29.75 24.203125-53.953125 53.953125-53.953125h19.980469c29.75 0 53.957031 24.203125 53.957031 53.953125v69.9375c0 9.660156-5.742188 17.996093-13.988281 21.792969v-55.761719c0-5.515625-4.476563-9.992188-9.992188-9.992188-5.519531 0-9.992187 4.476563-9.992187 9.992188v42.964843zm0 0"/><path d="m43.960938 351.449219c2.628906 0 5.207031-1.070313 7.0625-2.929688 1.859374-1.855469 2.929687-4.433593 2.929687-7.0625 0-2.640625-1.070313-5.207031-2.929687-7.0625-1.855469-1.871093-4.433594-2.929687-7.0625-2.929687-2.636719 0-5.203126 1.058594-7.0625 2.929687-1.859376 1.855469-2.925782 4.425781-2.925782 7.0625 0 2.628907 1.066406 5.207031 2.925782 7.0625 1.859374 1.859375 4.4375 2.929688 7.0625 2.929688zm0 0"/><path d="m260.671875 285.609375c5.726563-7.632813 9.125-17.109375 9.125-27.363281 0-25.191406-20.496094-45.6875-45.6875-45.6875s-45.6875 20.496094-45.6875 45.6875c0 10.28125 3.414063 19.777344 9.167969 27.421875-25.640625 6.328125-44.714844 29.511719-44.714844 57.078125v22.585937c0 19.273438 14.597656 35.199219 33.316406 37.3125v79.890625c0 16.003906 13.023438 29.027344 29.03125 29.027344 16.007813 0 29.027344-13.023438 29.027344-29.027344v-.28125c2.851562.9375 5.890625 1.453125 9.046875 1.453125 16.007813 0 29.03125-13.023437 29.03125-29.03125v-52.03125c18.71875-2.113281 33.3125-18.039062 33.3125-37.3125v-22.585937c0-27.65625-19.199219-50.902344-44.96875-57.136719zm-36.5625-53.066406c14.171875 0 25.703125 11.53125 25.703125 25.707031 0 14.171875-11.53125 25.703125-25.703125 25.703125-14.175781 0-25.703125-11.53125-25.703125-25.703125 0-14.175781 11.527344-25.707031 25.703125-25.707031zm61.550781 132.789062c0 8.226563-5.691406 15.128907-13.335937 17.035157v-38.949219c0-5.515625-4.472657-9.988281-9.988281-9.988281-5.519532 0-9.992188 4.472656-9.992188 9.988281v111.257812c0 4.988281-4.058594 9.046875-9.046875 9.046875s-9.046875-4.058594-9.046875-9.046875v-50.460937c0-5.515625-4.472656-9.992188-9.992188-9.992188-5.515624 0-9.988281 4.476563-9.988281 9.992188v78.320312c0 4.984375-4.058593 9.042969-9.046875 9.042969-4.988281 0-9.046875-4.058594-9.046875-9.042969v-139.113281c0-5.519531-4.476562-9.992187-9.992187-9.992187-5.519532 0-9.992188 4.472656-9.992188 9.992187v38.945313c-7.644531-1.902344-13.332031-8.808594-13.332031-17.03125v-22.589844c0-21.402344 17.410156-38.8125 38.8125-38.8125h45.171875c21.402344 0 38.8125 17.410156 38.8125 38.8125v22.585937zm0 0"/><path d="m443.496094 136.046875v-56.117187c0-38.5625-31.375-69.9375-69.941406-69.9375-38.5625 0-69.9375 31.375-69.9375 69.9375v56.332031c-14.585938 12.449219-23.855469 30.945312-23.855469 51.578125v48.707031c0 23.550781 17.289062 43.132813 39.839843 46.734375v97.113281c0 4.832031 3.433594 8.863281 7.992188 9.789063v93.402344c0 15.425781 12.550781 27.976562 27.976562 27.976562 6.84375 0 13.117188-2.472656 17.984376-6.570312 4.867187 4.097656 11.140624 6.570312 17.984374 6.570312 15.425782 0 27.976563-12.550781 27.976563-27.976562v-93.402344c4.5625-.925782 7.992187-4.957032 7.992187-9.789063v-16.988281c0-5.515625-4.472656-9.988281-9.988281-9.988281-5.519531 0-9.992187 4.472656-9.992187 9.988281v6.996094h-67.941406v-172.460938c0-5.519531-4.476563-9.992187-9.992188-9.992187-5.519531 0-9.992188 4.472656-9.992188 9.992187v64.90625c-11.449218-3.269531-19.859374-13.816406-19.859374-26.300781v-48.707031c0-26.375 21.460937-47.835938 47.835937-47.835938h52.203125c26.378906 0 47.835938 21.460938 47.835938 47.835938v48.707031c0 12.574219-8.53125 23.1875-20.109376 26.371094v-64.976563c0-5.519531-4.472656-9.992187-9.988281-9.992187-5.519531 0-9.992187 4.472656-9.992187 9.992187v91.226563c0 5.515625 4.472656 9.988281 9.992187 9.988281 5.515625 0 9.988281-4.472656 9.988281-9.988281v-5.839844c22.675782-3.496094 40.09375-23.144531 40.09375-46.78125v-48.707031c0-20.75-9.378906-39.34375-24.105468-51.792969zm-43.960938 347.539063c0 4.40625-3.585937 7.992187-7.996094 7.992187-4.40625 0-7.992187-3.585937-7.992187-7.992187v-93.199219h15.988281zm-35.972656-93.199219v93.199219c0 4.40625-3.585938 7.992187-7.992188 7.992187s-7.992187-3.585937-7.992187-7.992187v-93.199219zm-39.964844-310.457031c0-27.542969 22.410156-49.957032 49.957032-49.957032 27.546874 0 49.957031 22.414063 49.957031 49.957032v44.386718c-5.296875-1.984375-10.902344-3.332031-16.730469-3.933594 3.019531-5.441406 4.742188-11.695312 4.742188-18.34375v-12.359374c0-12.734376-10.363282-23.09375-23.097657-23.09375h-29.742187c-12.734375 0-23.09375 10.359374-23.09375 23.09375v12.359374c0 6.660157 1.730468 12.925782 4.753906 18.371094-5.832031.625-11.445312 1.992188-16.746094 4.003906zm31.972656 22.109374v-12.359374c0-1.714844 1.398438-3.113282 3.113282-3.113282h29.742187c1.71875 0 3.113281 1.398438 3.113281 3.113282v12.359374c0 9.914063-8.066406 17.984376-17.984374 17.984376-9.914063 0-17.984376-8.070313-17.984376-17.984376zm0 0"/><path d="m417.511719 316.949219c-2.625 0-5.203125 1.066406-7.0625 2.925781s-2.917969 4.4375-2.917969 7.0625c0 2.628906 1.058594 5.207031 2.917969 7.066406 1.859375 1.855469 4.4375 2.925782 7.0625 2.925782 2.640625 0 5.207031-1.066407 7.0625-2.925782 1.871093-1.859375 2.929687-4.429687 2.929687-7.066406s-1.058594-5.203125-2.929687-7.0625c-1.855469-1.859375-4.421875-2.925781-7.0625-2.925781zm0 0"/></svg>',
//     "#13490a",
//     "Get 5 full strikes each day. Or else..."
// )
// daoCreateHabit("Swimming", 
//     '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m469.871094 69.421875c-26.761719-32.890625-64.179688-55.988281-105.363282-65.039063-5.394531-1.183593-10.730468 2.226563-11.914062 7.621094-1.1875 5.390625 2.226562 10.726563 7.621094 11.910156 76.347656 16.78125 131.765625 85.789063 131.765625 164.085938 0 92.636719-75.363281 168-168 168-40.054688 0-76.875-14.097656-105.773438-37.582031l-24.648437-24.648438c-23.480469-28.898437-37.578125-65.714843-37.578125-105.769531 0-79.023438 53.742187-146.398438 130.6875-163.84375 5.386719-1.222656 8.765625-6.578125 7.542969-11.964844-1.222657-5.386718-6.578126-8.761718-11.964844-7.542968-40.898438 9.273437-78.023438 32.441406-104.535156 65.234374-26.910157 33.285157-41.730469 75.234376-41.730469 118.117188 0 39.574219 12.300781 76.324219 33.265625 106.648438l-40.101563 40.105468-2.230469-2.230468c-3.902343-3.902344-10.234374-3.902344-14.140624 0l-98.957032 98.960937c-8.910156 8.90625-13.816406 20.75-13.816406 33.351563 0 12.597656 4.90625 24.441406 13.8125 33.351562 8.910156 8.90625 20.753906 13.8125 33.351562 13.8125 12.601563 0 24.445313-4.90625 33.355469-13.8125l98.957031-98.960938c3.90625-3.902343 3.90625-10.234374 0-14.140624l-2.25-2.25 40.105469-40.101563c30.324219 20.964844 67.074219 33.265625 106.648438 33.265625 103.664062 0 188-84.335938 188-188 0-43.097656-14.953125-85.210938-42.109375-118.578125zm-403.496094 414.621094c-5.132812 5.132812-11.953125 7.957031-19.210938 7.957031-7.253906 0-14.074218-2.824219-19.207031-7.957031-5.132812-5.132813-7.957031-11.953125-7.957031-19.207031 0-7.257813 2.824219-14.078126 7.957031-19.210938l91.886719-91.886719 38.417969 38.417969zm96.710938-115.347657-19.800782-19.800781 38.289063-38.289062c6.105469 7.078125 12.722656 13.695312 19.800781 19.796875zm0 0"/><path d="m323.980469 20h.382812.035157c5.503906 0 9.980468-4.453125 10-9.964844.019531-5.523437-4.445313-10.0156248-9.964844-10.035156h-.453125c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0"/><path d="m313.980469 281.335938c0 11.382812 4.433593 22.085937 12.480469 30.132812 8.046874 8.050781 18.75 12.480469 30.132812 12.480469s22.085938-4.433594 30.132812-12.480469l57.382813-57.382812c16.617187-16.617188 16.617187-43.652344 0-60.265626-16.617187-16.617187-43.648437-16.617187-60.265625 0l-57.382812 57.382813c-8.050782 8.050781-12.480469 18.75-12.480469 30.132813zm26.625-15.992188 4.398437-4.398438v6.332032c0 5.523437 4.476563 10 10 10 5.519532 0 10-4.476563 10-10v-26.332032l10.28125-10.28125v6.140626c0 5.523437 4.476563 10 10 10 5.523438 0 10-4.476563 10-10v-26.140626l2.703125-2.703124c4.40625-4.40625 10.199219-6.613282 15.988281-6.613282 5.792969 0 11.585938 2.207032 15.992188 6.613282 8.816406 8.816406 8.816406 23.164062 0 31.980468l-57.382812 57.382813c-4.273438 4.273437-9.949219 6.625-15.992188 6.625-6.039062 0-11.71875-2.351563-15.992188-6.625-4.269531-4.269531-6.621093-9.949219-6.621093-15.988281 0-6.039063 2.351562-11.71875 6.625-15.992188zm0 0"/><path d="m244.425781 85.816406c-28.320312 1.105469-51.351562 25.082032-51.335937 53.449219.003906 5.789063.929687 11.488281 2.753906 16.941406 1.449219 4.335938 1.207031 8.753907-.6875 12.4375-4.726562 9.183594-6.953125 19.539063-6.445312 29.9375 1.46875 30.144531 26.238281 54.8125 56.394531 56.152344.898437.042969 1.792969.0625 2.6875.0625 20.261719 0 38.929687-10.226563 49.828125-27.277344 15.449218-3.335937 28.917968-12.179687 38.160156-25.132812 9.839844-13.789063 13.722656-30.582031 10.929688-47.289063-3.898438-23.324218-20.285157-42.410156-42.765626-49.804687-12.402343-4.078125-23.121093-8.5-32.773437-13.519531-8.195313-4.261719-17.445313-6.324219-26.746094-5.957032zm82.558594 72.578125c1.914063 11.4375-.746094 22.933594-7.480469 32.375-6.734375 9.4375-16.742187 15.6875-28.179687 17.597657-.023438.003906-.046875.007812-.066407.011718-3.984374.679688-7.414062 3.082032-9.417968 6.597656-7.320313 12.859376-21.066406 20.445313-35.847656 19.78125-19.945313-.890624-36.335938-17.207031-37.308594-37.148437-.335938-6.894531 1.136718-13.75 4.257812-19.816406 4.378906-8.519531 5.042969-18.4375 1.867188-27.929688-1.136719-3.40625-1.714844-6.972656-1.71875-10.605469-.007813-17.757812 14.398437-32.765624 32.117187-33.457031.4375-.019531.878907-.027343 1.320313-.027343 5.382812 0 10.6875 1.285156 15.417968 3.746093 10.617188 5.519531 22.3125 10.351563 35.75 14.773438 15.398438 5.066406 26.621094 18.132812 29.289063 34.101562zm0 0"/><path d="m233.039062 169.351562c0 18.636719 15.164063 33.800782 33.800782 33.800782 18.640625 0 33.804687-15.164063 33.804687-33.800782 0-18.636718-15.164062-33.804687-33.804687-33.804687-18.636719 0-33.800782 15.164063-33.800782 33.804687zm33.800782-13.804687c7.609375 0 13.804687 6.191406 13.804687 13.804687 0 7.609376-6.195312 13.800782-13.804687 13.800782s-13.800782-6.191406-13.800782-13.800782c0-7.613281 6.191407-13.804687 13.800782-13.804687zm0 0"/><path d="m369.171875 159.410156c5.570313 2.195313 11.390625 3.265625 17.15625 3.265625 12.171875 0 24.117187-4.757812 33.054687-13.695312 13.167969-13.167969 17.261719-32.875 10.425782-50.210938-1.015625-2.578125-3.058594-4.617187-5.636719-5.632812-17.332031-6.835938-37.039063-2.742188-50.210937 10.425781-13.167969 13.171875-17.261719 32.878906-10.425782 50.210938 1.019532 2.578124 3.058594 4.621093 5.636719 5.636718zm18.933594-41.703125c6.453125-6.453125 15.65625-9.097656 24.398437-7.265625 1.832032 8.742188-.8125 17.945313-7.265625 24.398438s-15.65625 9.097656-24.394531 7.261718c-1.835938-8.742187.808594-17.941406 7.261719-24.394531zm0 0"/><path d="m260.710938 273.871094c-1.859376 1.859375-2.929688 4.4375-2.929688 7.066406 0 2.632812 1.070312 5.210938 2.929688 7.070312 1.859374 1.859376 4.4375 2.929688 7.070312 2.929688 2.628906 0 5.207031-1.066406 7.070312-2.929688 1.859376-1.859374 2.929688-4.4375 2.929688-7.070312 0-2.628906-1.070312-5.207031-2.929688-7.066406-1.863281-1.859375-4.441406-2.933594-7.070312-2.933594-2.640625 0-5.222656 1.074219-7.070312 2.933594zm0 0"/><path d="m283.570312 306.878906c-1.859374 1.859375-2.929687 4.441406-2.929687 7.070313 0 2.628906 1.070313 5.210937 2.929687 7.070312 1.871094 1.859375 4.441407 2.929688 7.070313 2.929688s5.210937-1.070313 7.070313-2.929688c1.867187-1.859375 2.929687-4.441406 2.929687-7.070312 0-2.628907-1.0625-5.210938-2.929687-7.070313-1.859376-1.859375-4.429688-2.929687-7.070313-2.929687-2.628906 0-5.210937 1.070312-7.070313 2.929687zm0 0"/><path d="m453.660156 159.738281c1.867188-1.859375 2.929688-4.4375 2.929688-7.066406 0-2.640625-1.0625-5.210937-2.929688-7.070313-1.859375-1.871093-4.429687-2.929687-7.070312-2.929687-2.628906 0-5.210938 1.058594-7.070313 2.929687-1.859375 1.859376-2.929687 4.429688-2.929687 7.070313 0 2.628906 1.070312 5.207031 2.929687 7.066406 1.859375 1.863281 4.441407 2.933594 7.070313 2.933594s5.210937-1.070313 7.070312-2.933594zm0 0"/><path d="m325.191406 74.851562c-1.863281 1.859376-2.929687 4.4375-2.929687 7.070313 0 2.636719 1.066406 5.21875 2.929687 7.078125 1.859375 1.859375 4.4375 2.929688 7.070313 2.929688 2.628906 0 5.207031-1.070313 7.066406-2.929688 1.863281-1.859375 2.933594-4.441406 2.933594-7.078125 0-2.632813-1.070313-5.210937-2.933594-7.070313-1.859375-1.863281-4.4375-2.929687-7.066406-2.929687-2.632813 0-5.210938 1.066406-7.070313 2.929687zm0 0"/></svg>',
//     "#28bfcf",
//     "Swim every day. Or else you are a loser."
// )