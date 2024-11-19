const audio = {
  Map: new Howl({
    src: "./audio/musica-navegaurd.mp3",
    loop: true,
    html5: true,
    volume: 0.5,
    onend: function () {
      this.seek(0);
      this.play();
    },
  }),
};

const sons = {
  somJonas: new Howl({
    src: ['./audio/AudioJonas.mp3'],
    volume: 1 // caminho para o arquivo de áudio
  }),
  somMenina: new Howl({
    src: ['./audio/voz-menina.mp3']}),
  somMenino: new Howl({
    src: ['./audio/voz-menino.mp3']}),
  som1: new Howl({
    src: ["./audio/posso-te-ligar-agora.mp3"], // caminho para o arquivo de áudio
  }),
  som2: new Howl({
    src: ["./audio/tot.mp3"], // caminho para o arquivo de áudio
  }),
  som3: new Howl({
    src: ["./audio/Carlos-Gritandoo.mp3"],
    volume: 5, // caminho para o arquivo de áudio
  }),
};
