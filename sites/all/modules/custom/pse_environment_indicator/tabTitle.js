var host = window.location.hostname;
host = host.split('.');
host = host[0].split('-');
if(undefined !== host[1]) {
    document.title = host[1].toUpperCase() + ' ' + document.title;
}
