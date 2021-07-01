import ProgressBar from '../../components/ProgressBar.js';

export default function ProgressBarTest() {
  const progress1 = "Kepemimpinan";
  const bar1 = "50%"
  const bar_style1 = {
    background: "#EBBA78",
    width: "50%",
  }

  const progress2 = "Keteknikfisikaan";
  const bar2 = "70%"
  const bar_style2 = {
    background: "#80D5AD",
    width: "70%",
  }

  const progress3 = "Kemahasiswaan";
  const bar3 = "60%"
  const bar_style3 = {
    background: "#A5A6F6",
    width: "60%",
  }

  const progress4 = "Solidaritas";
  const bar4 = "80%"
  const bar_style4 = {
    background: "#888888",
    width: "80%",
  }

  const progress5 = "Kolaboratif";
  const bar5 = "70%"
  const bar_style5 = {
    background: "#8CD3FF",
    width: "70%",
  }

  return (
    <>
      <ProgressBar progress={progress1} bar={bar1} bar_style={bar_style1}/>
      <ProgressBar progress={progress2} bar={bar2} bar_style={bar_style2}/>
      <ProgressBar progress={progress3} bar={bar3} bar_style={bar_style3}/>
      <ProgressBar progress={progress4} bar={bar4} bar_style={bar_style4}/>
      <ProgressBar progress={progress5} bar={bar5} bar_style={bar_style5}/>
    </>
  );
}
