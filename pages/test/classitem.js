import ClassItem from '../../components/ClassItem.js';
import image from '../../public/images/image.jpg';

export default function ClassItemTest() {
  const number1 = "1";
  const class_name1 = "Skidbladnir";
  const level1 = "First Mate";
  const health_bar1 = "100%";
  const health_style1 = {
    background: "#E90909",
    width: "100%",
  }
  const exp_bar1 = "70%";
  const exp_style1 = {
    background: "#46D322",
    width: "70%",
  }

  const number2 = "2";
  const class_name2 = "The Flying Dutchman";
  const level2 = "First Mate";
  const health_bar2 = "100%";
  const health_style2 = {
    background: "#E90909",
    width: "100%",
  }
  const exp_bar2 = "60%";
  const exp_style2 = {
    background: "#46D322",
    width: "60%",
  }

  return (
    <>
      <ClassItem
        number={number1}
        class_logo={image}
        class_name={class_name1}
        level_logo={image}
        level={level1}
        health_bar={health_bar1}
        health_style={health_style1}
        exp_bar={exp_bar1}
        exp_style={exp_style1}
      />
      <ClassItem
        number={number2}
        class_logo={image}
        class_name={class_name2}
        level_logo={image}
        level={level2}
        health_bar={health_bar2}
        health_style={health_style2}
        exp_bar={exp_bar2}
        exp_style={exp_style2}
      />
      <ClassItem
        number={3}
        class_logo={image}
        class_name={class_name1}
        level_logo={image}
        level={level1}
        health_bar={health_bar1}
        health_style={health_style1}
        exp_bar={exp_bar1}
        exp_style={exp_style1}
      />
    </>
  );
}
