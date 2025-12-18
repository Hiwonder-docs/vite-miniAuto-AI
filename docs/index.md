---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hiwonder Docs"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
    src: /WonderCom.png
    alt: 幻尔科技
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
    icon:
      src: /qdee iot.png
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon:
      src: /Tankbot-V1.5.png
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    icon:
      src: /Wonderbit.png
---
<!-- //我现在想在这下面列出一个产品清单 -->

<style>
  .product-toc {
    width: 220px;
    flex-shrink: 0;
    position: sticky;
    top: 80px;
    align-self: flex-start;
    font-size: 14px;
  }
  .product-toc ul {
    list-style: none;
    padding-left: 0;
    margin: 4px 0;
  }
  .product-toc li {
    margin: 2px 0;
  }
  .product-toc a {
    color: var(--vp-c-text-1); /* 跟随主题文字颜色，暗色模式也清晰 */
    text-decoration: none;
  }
  .product-toc a:hover {
    color: #3eaf7c;
  }
</style>

<div style="display: flex; align-items: flex-start; gap: 32px;">

  <aside class="product-toc">
    <h2 style="margin-top: 0;">产品清单</h2>
    <ul>
      <li>
        <strong><a href="#raspberry-pi">Raspberry Pi</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#raspberry-pi-robotics">Robotics</a></li>
          <li><a href="#raspberry-pi-board">Board</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#jetson-series">Jetson Series</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#jetson-robotics">Robotics</a></li>
          <li><a href="#jetson-board">Board</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#esp32-arduino-series">ESP32 &amp; Arduino Series</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#esp32-arduino-robotics">Robotics</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#microbit-series">microbit Series</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#microbit-robotics">Robotics</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#scratch-series">Scratch Series</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#scratch-robotics">Robotics</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#controller">Controller</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#ros-controller">ROS Controller</a></li>
          <li><a href="#servo-controller">Servo Controller</a></li>
        </ul>
      </li>
      <li>
        <strong><a href="#accessories">Accessories</a></strong>
        <ul style="padding-left: 16px;">
          <li><a href="#vehicle-chassis">Vehicle Chassis</a></li>
          <li><a href="#camera-lidar">Camera/Lidar</a></li>
          <li><a href="#sensor">Sensor</a></li>
        </ul>
      </li>
    </ul>
  </aside>

  <div style="flex: 1; min-width: 0;">

<h1 id="raspberry-pi">Raspberry Pi</h1>

<h2 id="raspberry-pi-robotics">Robotics</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ArmPi_mini/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/ArmPi_mini.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ArmPi mini</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/uHandPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/uHandPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>uHandPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/TurboPi/en/advanced/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/TurboPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>TurboPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MasterPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/MasterPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MasterPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ArmPi_FPV/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/ArmPi_FPV.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ArmPi FPV</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ArmPi_Pro/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/ArmPi_Pro.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ArmPi Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MentorPi-T1/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/MentorPi_T1.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MentorPi T1</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MentorPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/MentorPi_M1.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MentorPi M1 & A1</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/SpiderPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/SpiderPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>SpiderPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/SpiderPi_Pro/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/SpiderPi_Pro.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>SpiderPi Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/TonyPi_Pro/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/TonyPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>TonyPi & TonyPi Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/PuppyPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/PuppyPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>PuppyPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/LanderPi/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/LanderPi.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>LanderPi</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ArmPi-Ultra/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/ArmPi_Ultra.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ArmPi Ultra</span>
                </div>
            </a>
        </div>
    </div>
</div>

<h2 id="raspberry-pi-board">Board</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Raspberry-Pi-5-Controller/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/Raspberry_Pi_5.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Raspberry Pi 5</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Raspberry-Pi-5-Expansion-Board/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/Raspberry_Pi_5_Expansion_Board.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Raspberry Pi 5 Expansion Board</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="jetson-series">Jetson Series</h1>

<h2 id="jetson-robotics">Robotics</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ROSPug/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/ROSPug.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ROSPug</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/JetAuto/en/jetauto-orin-nano/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/JetAuto.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>JetAuto & JetAuto Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/JetAcker/en/jetacker-orin-nano/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/JetAcker.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>JetAcker</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/JetArm/en/jetarm-orin-nano/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/JetArm.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>JetArm & JetArm Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/JetRover/en/jetson-orin-nano/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/JetRover.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>JetRover</span>
                </div>
            </a>
        </div>
    </div>
</div>

<h2 id="jetson-board">Board</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Jetson-Orin-Nano/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/Jetson_Orin_Nano.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Jetson Orin Nano</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="esp32-arduino-series">ESP32 &amp; Arduino Series</h1>

<h2 id="esp32-arduino-robotics">Robotics</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/H5S/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/H5S.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>H5S</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MaxArm/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/MaxArm.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MaxArm</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/uHand_UNO/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/uHand_UNO.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>uHand UNO</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/miniAuto/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/miniAuto.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>miniAuto</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/miniArm/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/miniArm.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>miniArm</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/miniHexa/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/miniHexa.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>miniHexa</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Spiderbot/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/Spiderbot.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Spiderbot</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Tonybot/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/Tonybot.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Tonybot</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MechDog/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/MechDog.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MechDog & MechDog Pro</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/LeArm_AI/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/esp32_arduino/LeArm_AI.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>LeArm AI</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="microbit-series">microbit Series</h1>

<h2 id="microbit-robotics">Robotics</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Nexbit/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/microbit/Nexbit.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Nexbit</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/AiHand/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/microbit/AiHand.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>AiHand</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/IoT_Smart_House/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/microbit/IoT_Smart_House.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>IoT Smart House</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Qtruck/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/microbit/Qtruck.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Qtruck</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="scratch-series">Scratch Series</h1>

<h2 id="scratch-robotics">Robotics</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/AiNova/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/scratch/AiNova.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>AiNova</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="controller">Controller</h1>

<h2 id="ros-controller">ROS Controller</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Raspberry-Pi-5-Controller/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/Raspberry_Pi_5.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Raspberry Pi 5</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Raspberry-Pi-5-Expansion-Board/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/raspberry_pi/Raspberry_Pi_5_Expansion_Board.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Raspberry Pi 5 Expansion Board</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ROS-Robot-Control-Board/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/controller/ROS_Robot_Control_Board.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ROS Robot Control Board</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Jetson-Orin-Nano/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/jetson/Jetson_Orin_Nano.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Jetson Orin Nano</span>
                </div>
            </a>
        </div>
    </div>
</div>

<h2 id="servo-controller">Servo Controller</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/6-Channel-Servo-Tester/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/controller/6_Channel_Digital_Servo_Tester_Controller.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>6 Channel Servo Tester</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/16-Channel-Servo-Controller/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/controller/LSC-16.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>16 Channel Servo Controller</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/24-Channel-Servo-Controller/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/controller/LSC-24.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>24 Channel Servo Controller</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/32-Channel-Servo-Controller/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/controller/LSC-32.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>32 Channel Servo Controller</span>
                </div>
            </a>
        </div>
    </div>
</div>

---

<h1 id="accessories">Accessories</h1>

<h2 id="vehicle-chassis">Vehicle Chassis</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Black-Mecanum-Wheel-Chassis/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Black_Mecanum_Wheel_Chassis.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Black Mecanum-Wheel Chassis</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Ackermann-Chassis/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Ackerman_Chassis.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Ackerman Chassis</span>
                </div>
            </a>
        </div>
    </div>
</div>

<h2 id="camera-lidar">Camera/Lidar</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/WonderMV/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/WonderMV.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>WonderMV</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/ESP32-S3/en/latest/index.html" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/ESP32_S3.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>ESP32-S3</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/CanMV-K230/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/CanMV_K230.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>CanMV K230</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Aurora930-Pro/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Aurora930_Pro.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Aurora930 Pro</span>
                </div>
            </a>
        </div>
    </div>
</div>

<h2 id="sensor">Sensor</h2>

<div class="container">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom:50px;">
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/WonderEcho/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/WonderEcho.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>WonderEcho</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/8-ch-Line-Follower/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/8_Channel_IR_Line_Follower_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>8-Channel IR Line Follower Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/IMU-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/IMU_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>IMU Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/GPS-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/GPS_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>GPS Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Raindrop-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Raindrop_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Raindrop Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Qdee-Ultrasonic-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Qdee_Ultrasonic_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Qdee Ultrasonic Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Acceleration-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Acceleration_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Acceleration Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Glowing-Ultrasonic-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Glowing_Ultrasonic_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Glowing Ultrasonic Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Color-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Color_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Color Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Sound-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Sound_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Sound Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Touch-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Touch_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Touch Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Digital-Tube-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Digital_Tube_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Digital Tube Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Fan-Module-White/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Fan_Module_White.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Fan Module (White)</span>
                </div>
            </a>
        </div>        
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Light-Sensor-White/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Light_Sensor_White.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Light Sensor (White)</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/LED-Dot-Matrix-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/LED_Dot_Matrix_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>LED Dot Matrix Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Knob-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Knob_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Knob Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/MP3-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/MP3_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>MP3 Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/OLED-Display-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/OLED_Display_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>OLED Display Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Infrared-Obstacle-Avoidance-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Infrared_Obstacle_Avoidance_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Infrared Obstacle Avoidance Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/RGB-Module/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/RGB_Module.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>RGB Module</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Soil-Sensor/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Soil_Sensor.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Soil Sensor</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Ultrasonic-Module-White/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Ultrasonic_Module_White.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Ultrasonic Module (White)</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Ultrasonic-Sensor-Black/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Ultrasonic_Module_Black.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Ultrasonic Sensor (Black)</span>
                </div>
            </a>
        </div>
        <div style="width: calc(18% - 15px); min-width: 150px; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <a target="_blank" href="https://wiki.hiwonder.com/projects/Water-Pump/en/latest/" style="display: block; text-decoration: none;">
                <img src="./public/images/accessories/Water_Pump.png" alt="图片1" style="width: 100%; height: auto; display: block;">
                <div style="padding: 12px 4px; text-align: center; color: #333;">
                    <span>Water Pump</span>
                </div>
            </a>
        </div>
    </div>
</div>

  </div>
</div>