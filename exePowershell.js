
/*
const child_process = require('child_process');
child_process.execFile('powershell.exe', ['-ExecutionPolicy', 'Unrestricted', '-File', 'C:\\Users\\user\\Desktop\\test.ps1']), (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log(stdout);
};

let comando = child_process.spawn('powershell.exe', ['/c', '', 'C:']);
comando.stdout.on('data', function (datos) {
    console.log('Salida: ');
    console.log(datos.toString());
});


comando.stderr.on('data', function (datos) {
    console.log('Error: ');
    console.log(datos.toString());
});

comando.on('exit', function (code) {
    console.log('Proceso finalizado con código: ' + code);
});

*/


const {NodeSSH} = require('node-ssh');
const ssh = new NodeSSH();
ssh.connect(
    {
        host: '172.25.26.11', username: 'adminbot.contrasenas', password: 'Soporte365*',
    })
    .then(function (response) { console.log(response.connect) })


/*
    let conn = new ssh2.Client()
    return new Promise((resolve, reject) => {
        conn.on('ready', () => {
            conn.exec(cmd, (err, stream) => {
                if (err) {
                    reject(err)
                }
                stream.on('close', (code, signal) => {
                    if (code !== 0) {
                        reject(code)
                    }
                    conn.end()
                    resolve(code)
                }).stderr.on('data', (data) => {
                    reject(data)
                })
            })
        }).connect({
            host: ``,
            port: 22,
            username: '',
            privateKey: fs.readFileSync('/Users/<me>/.ssh/id_rsa'),
            debug: (s) => {console.log(s)}
        })
    })
    */