export const state = () => ({

    cart: [],
    counter: 0,
    allproduct: [{
            id: '01',
            name: 'ทำความสะอาดไส้กรองอากาศ',
            price: 1000,
            detail: 'กรองอากาศรถยนต์ คือ อุปกรณ์ที่ถูกติดตั้งไว้ระหว่างช่องดูดอากาศเข้าเครื่องยนต์ ทำหน้าที่กรองฝุ่นและสิ่งสกปรกต่าง ๆ เพื่อไม่ให้สิ่งสกปรกเข้าสู่เครื่องยนต์ โดยฝุ่นจะติดเกาะตามกรองอากาศ ซึ่งถ้าหากเราไม่ล้างทำความสะอาด จะทำให้ประสิทธิภาพการทำงานของกรองอากาศลดลง และทำงานไม่เต็มที่ส่งผลต่อเครื่องยนต์ในระยะยาว',
            image: 'https://file.chobrod.com/news/548497863208257.jpg',

        },
        {
            id: '02',
            name: 'ตรวจสอบสายพาน',
            price: 1000,
            detail: 'สำหรับเครื่องยนต์ส่วนที่จำเป็นต้องดูแลมีหลายส่วน นอกเหนือจากเรื่องหลักๆ เช่น ของเหลวต่างๆ และสายพานก็สำคัญไม่แพ้กัน ในรถยนต์บางรุ่นก็จะมีทั้งสายพานราวลิ้นหรือที่เรียกกันว่าสายพานไทม์มิ่ง และสายพานหน้าเครื่อง เพราะสายพานมีหน้าที่ถ่ายทอดกำลังจากเครื่องยนต์เพื่อส่งไปให้อุปกรณ์อื่นทำงาน เช่น ไดชาร์จ ปั๊มน้ำหรือ ปั๊มเพาเวอร์ …สายพานไทม์มิ่งและสายพานหน้าเครื่องมีหน้าที่ในการทำงานอยู่คนละส่วน แยกกันอย่างชัดเจน เพราะบางคนยังเข้าใจว่าสายพานทั้ง 2 แบบ คือสายพานตัวเดียวกัน ทั้งที่ความจริงแล้วมันคนละเรื่องกันเลย',
            image: 'https://www.kmotors.co.th/wp-content/uploads/2017/04/6-1.jpg',

        },
        {
            id: '03',
            name: 'ตรวจสอบระดับน้ำมันเครื่อง',
            price: 1000,
            detail: 'น้ำมันเครื่อง นับเป็นองค์ประกอบสำคัญที่ช่วยหล่อลื่นและปกป้องเครื่องยนต์ให้ทำงานได้อย่างเต็มประสิทธิภาพ แน่นอนว่าเมื่อผ่านการใช้งานไปสักระยะ น้ำมันเครื่องย่อมมีการเสื่อมสภาพและมีปริมาณที่ลดลงไปจากการเผาไหม้ ดังนั้นผู้ใช้รถยนต์ทุกท่านควรหมั่นตรวจเช็คระดับน้ำมันเครื่องยนต์อย่างสม่ำเสมอ เพื่อให้มั่นใจว่ามีปริมาณน้ำมันเพียงพอสำหรับหล่อลื่นให้กับเครื่องยนต์ทั้งระบบ สำหรับวิธีตรวจเช็คน้ำมันเครื่องนั้นไม่ยาก ผู้ใช้รถสามารถทำได้ง่ายๆ ด้วยตัวเอง เพียงดึงก้านวัดออกมาดู',
            image: 'https://img.khaorot.com/2018/04/04/D5ZE7rEA/5e-72b4-139a.jpg',

        },
        {
            id: '04',
            name: 'ตรวจสอบสภาพสีและลักษณะทั่วไปของน้ำมันเครื่อง',
            price: 1000,
            detail: 'รถยนต์ทุกคันเมื่อถึงกำหนดเวลาต้องบำรุงรักษา สิ่งแรกๆ ที่จำเป็นมากที่สุดคือ การเปลี่ยนถ่ายน้ำมันเครื่องหลังจากผ่านการใช้งานมาระยะหนึ่ง ไม่ว่าจะ 5,000 กม. ไล่ไปจนถึง 20,000 กม. อย่างไรก็ต้องมีการเปลี่ยนของเก่าออก และเติมของใหม่แทนอย่างสม่ำเสมอ มาดูกันว่าเราจะ "เลือกน้ำมันเครื่องอย่างไร" ให้เหมาะสม ทั้งเครื่องยนต์และลักษณะการใช้งานหรือแม้แต่งบประมาณ',
            image: 'https://talleresentrepuentes.files.wordpress.com/2012/04/nivel-aceite.jpg',

        },
        {
            id: '05',
            name: 'การตรวจเช็คน้ำมันพวงมาลัยพาวเวอร์',
            price: 1000,
            detail: 'รถยนต์ส่วนใหญ่ ยกเว้นรถไฮบริดและไฟฟ้า จะมีระบบพวงมาลัยเพาเวอร์ไฮดรอลิกที่ช่วยให้ผู้ขับสามารถหมุนพวงมาลัยได้โดยไม่ต้องออกแรงมากนัก ระบบพวงมาลัยเพาเวอร์ประกอบไปด้วยอุปกรณ์ต่างๆ มากมาย อาทิเช่น เฟืองขับและเฟืองสะพาน (rack and penion) ที่เชื่อมต่อเข้ากับล้อหน้า ลูกสูบภายในเฟืองขับและเฟืองสะพานซึ่งเคลื่อนที่ตามแรงดันน้ำมันจากปั๊มพวงมาลัยเพาเวอร์ที่ทำหน้าที่ช่วยหมุนพวงมาลัย และกระบอกสูบซึ่งมีน้ำมันอยู่ภายในและติดตั้งอยู่กับตัวปั๊มหรืออาจจะติดตั้งห่างออกไปเพื่อให้เข้าถึงง่ายขึ้น (ถ้ามีน้ำมันไม่เพียงพอ การบังคับเลี้ยวจะทำได้ยากขึ้น นอกจากนี้ ปั๊มหรือชุดเฟืองขับและเฟืองสะพานอาจได้รับความเสียหายเมื่อไม่มีน้ำมันช่วยลดแรงกระแทก) ด้วยเหตุนี้ การตรวจสอบระดับน้ำมันพวงมาลัยเพาเวอร์เป็นประจำและเติมน้ำมันเมื่อจำเป็นจึงเป็นสิ่งสำคัญ',
            image: 'https://f.ptcdn.info/114/004/000/1365847299-2JPG-o.jpg',

        },
        {
            id: '06',
            name: 'ตรวจสอบสภาพของหัวเทียน',
            price: 1000,
            detail: ' หัวเทียน ชิ้นส่วนสำคัญอีกหนึ่งอย่างในเครื่องยนต์ ที่จะคอยช่วยในเรื่องของการจุดระเบิดภายในห้องเผาไหม้ ทำให้เครื่องยนต์มีกำลังมากขึ้น ส่วนใหญ่แล้วหัวเทียนจะมีอายุการใช้งานอยู่ที่ประมาณ 50,000 กิโลเมตร (แล้วแต่รุ่น) แต่บางครั้งมันอาจจะเกิดปัญหาขึ้นก่อนที่จะหมดอายุการใช้งาน',
            image: 'https://s.isanook.com/au/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTIvNjQ2ODEvc3BhcmtwbHVnZXItc2Fub29rLmpwZw==.jpg',

        },
        {
            id: '07',
            name: 'ตรวจสอบพัดลมระบายอากาศ',
            price: 1000,
            detail: 'ก่อนอื่นเลยก็ต้องมารู้จักระบบการทำงานของ พัดลมหม้อน้ำ กันก่อน ซึ่ง พัดลมหม้อน้ำ นี้จะไม่มีการหมุนตลอดเวลา แต่จะหมุนเฉพาะช่วงที่หม้อน้ำมีความร้อนสูง เพื่อเป็นการ ระบายความร้อน และจะหยุดหมุนก็ต่อเมื่อหม้อน้ำเย็นลงอยู่ในอุณหภูมิที่เหมาะสม',
            image: 'https://assets.thaicarlover.com/wp-content/uploads/2016/04/fan-engine-451x300.jpg',

        },
        {
            id: '08',
            name: 'ตรวจสอบหม้อน้ำ',
            price: 1000,
            detail: 'หม้อน้ำรถยนต์ คือตัวช่วยระบายความร้อนในการทำงานของเครื่องยนต์ โดยทั่วไปแล้วจะใช้น้ำเป็นตัวระบายความร้อนซึ่งเราจะต้องคอยดูระดับน้ำให้อยู่ในระดับที่เหมาะสมเสมอ เพื่อให้ระบบระบายความร้อนทำงานได้อย่างมีประสิทธิภาพ และถ้าเป็นไปได้ละก็ ควรตรวจสอบระดับน้ำในหม้อน้ำทุกวันก่อนสตาร์ทรถค่ะ ถ้าไม่สะดวกทุกวัน จะดูสัปดาห์ละครั้งหรือเดือนละครั้งก็ได้ อย่าลืมนะคะว่า บ้านเราอากาศร้อนเวลาขับรถไปไหนยิ่งรถติดด้วยแล้วละก็ระบบการทำงานก็ยิ่งทำงานหนักเพิ่มมากขึ้นไปด้วย',
            image: 'https://inwfile.com/s-cv/ranbzu.jpg',

        },
        {
            id: '09',
            name: 'ตรวจสอบระบบหล่อเย็น',
            price: 1000,
            detail: 'ในขณะที่เครื่องยนต์ในรถของคุณกำลังทำหน้าที่อย่างแข็งขันเพื่อนำพาคุณและครอบครัวไปยังจุดหมาย อุปกรณ์และชิ้นส่วนต่างๆ ในเครื่องยนต์เคลื่อนที่อย่างรวดเร็วบนขั้นตอนของการสันดาป ชิ้นส่วนโลหะจำนวนมากในเครื่องยนต์ต้องทำงานเสียดสีกันไปมาอยู่ตลอดเวลา การเสียดสีที่เกิดขึ้นจำเป็นอย่างยิ่งที่จะต้องมีการหล่อลื่นและหล่อเย็นที่ดี เนื่องจากขณะที่เครื่องยนต์ทำงานจะเกิดความร้อนทั้งจากการเสียดสีและการจุดระเบิด นอกจากน้ำมันเครื่องที่ใช้สำหรับหล่อลื่นชิ้นส่วนต่างๆ ภายในห้องเครื่องยนต์แล้ว (Lubricating System) ระบบหล่อเย็นหรือระบบระบายความร้อน coolant System ช่วยลดอุณหภูมิในบริเวณที่มีความร้อนสูง เช่น ผนังกระบอกสูบ ระหว่างลูกสูบ และกระบอกสูบ ความร้อนบริเวณนี้จะมีมากเป็นพิเศษ',
            image: 'https://toyotakan.com/wp-content/uploads/2017/05/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99.jpg',

        },
        {
            id: '10',
            name: 'ตรวจสอบการสึกหรอของหน้ายาง',
            price: 1000,
            detail: 'ยางที่มีความลึกร่องดอกยางเหลือน้อยอาจส่งผลต่อความปลอดภัยของผู้ขับขี่  โดยเฉพาะอย่างยิ่งบนสภาพพื้นถนนเปียก มีโอกาสที่จะเกิดการเสียการควบคุมขณะขับขี่มากขึ้น  เมื่อใดก็ตามที่มีสิ่งกีดขวางระหว่างหน้าสัมผัสยางกับพื้นถนนหน้ายางจะต้องทำหน้าที่ในการรีดผ่านสิ่งกีดขวางนั้น เพื่อที่จะคงไว้ซึ่งการยึดเกาะระหว่างหน้าสัมผัสยางกับพื้นถนน ยิ่งมีความลึกร่องดอกยางเหลืออยู่น้อยเท่าใดประสิทธิภาพในการยึดเกาะบนพื้นถนนก็น้อยลงเท่านั้น ดังนั้นความลึกของร่องดอกยางจึงเป็นอีกสิ่งที่สำคัญ นอกจากนั้นการลดความเร็วขณะขับขี่ ก็เป็นอีกหนึ่งตัวช่วยในการช่วยยึดเกาะพื้นถนนในสภาพถนนดังกล่าว',
            image: 'https://thanachartbluebook.com/uploadimages/_img_board/11-NOV/-9850-06.11.2015%20%E0%B8%A5%E0%B8%A1%E0%B8%A2%E0%B8%B2%E0%B8%87%20(2).jpg',

        },
        {
            id: '11',
            name: 'ตรวจสอบสภาพทั่วไปของยาง',
            price: 1000,
            detail: 'ตรวจดูความชำรุดที่จะส่งผลให้โครงสร้างของ ยางรถยนต์ เช่น ถูกของมีคมบาดเป็นรอยบาดแผลใหญ่ หรือโครงสร้างซ้ำจากการเกิดอุบัติเหตุ เช่น ปีนขอบทางเท้าอย่างรุนแรงจนเกิดความเสียหายไปถึงกระทะล้อรถยนต์ ซึ่งหมายความว่าหน้า ยางรถยนต์ โดยเฉพาะแก้ม ยางรถยนต์ จะถูกบดไปกับขอบทางเท้า แน่นอนว่าแก้ม ยางรถยนต์ ได้รับความเสียหายมากแน่นอน ซึ่งถ้าแก้ม ยางรถยนต์ มีรอยแตกอาจนำไปสู่ ยางรถยนต์ ระเบิดหรือแตกขณะที่ขับขี่ด้วยความเร็วสูงได้',
            image: 'https://file.chobrod.com/2018/10/16/Kmr793lv/6-result-4cda.jpg',

        },
        {
            id: '12',
            name: 'ตรวจสอบความลึกของร่องดอกยาง',
            price: 1000,
            detail: 'ความลึกของดอกยางรถยนต์ควรสังเกตความลึกของดอก ยางรถยนต์ไม่ควรต่ำกว่า 3 มิลลิเมตร ซึ่งความลึกของดอกยางใหม่ จะมีความลึกประมาณ 8– 9 มิลลิเมตร หรือไม่ คุณอาจใช้ไม้ขีดไฟทิ่มลงไปในร่อง ยางรถยนต์ ถ้าคุณเห็นหัวไม้ขีดสีแดง ก็ หมายความว่าดอกยางเหลือน้อยเกินไปที่ จะใช้งานต่อไป ',
            image: 'https://www.yellowtire.com/upload/stockfile/1632-1554771664.jpg',

        },
        {
            id: '13',
            name: 'ตรวจสอบระดับน้ำมันเกียร์',
            price: 1000,
            detail: 'การวัดระดับน้ำมันเกียร์อัตโนมัติ จะยุ่งยากกว่าน้ำมันเครื่องหน่อย เพราะระบบหล่อลื่นของเกียร์นั้นมีความซับซ้อนกว่าระบบหล่อลื่นของเครื่องยนต์พอสมควร ปกติเวลาเราดึงก้านวัดน้ำมันเครื่องออกมา ก็จะเห็นระดับ E-F หรือ L-H อย่างชัดเจน และวัดตอนไหนก็ได้ ขอแค่ดับเครื่องมาแล้วเกินกว่า5 นาทีเป็นใช้ได้ แต่กับน้ำมันเกียร์อัตโนมัติมันไม่ใช่ ถ้าจอดไว้แล้วดึงออกมา มักจะเจอกับระดับน้ำมันที่ได้ระดับหรือเกินระดับที่ขีดไว้อยู่เสมอ แถมที่ก้านยังมีตัววัดไว้ 2 ช่วงอีกต่างหาก คือ Hot และ Cold (หรือ Cool) ',
            image: 'https://f.ptcdn.info/887/051/000/orn9vx8utUZIMCPD57K-o.jpg',

        },
        {
            id: '14',
            name: 'ตรวจสอบสภาพสีและลักษณะของน้ำมันเกียร์',
            price: 1000,
            detail: 'อธิบายง่ายๆว่า น้ำมันเกียร์ออโต้มันมีคุณสมบัติการใช้งานที่ต่างจากน้ำมันเครื่อง เพราะเมื่อน้ำมันมีความร้อนสะสม จะมีการขยายตัว ดังนั้นระดับที่วัดจึงมีอยู่ 2 ระดับ โดยระดับ Cold ใช้วัดตอนที่เครื่องมีการดับมาเกินกว่า 2-3 ชั่วโมง (เมื่อระดับความร้อนเครื่องยนต์ต่ำสุด) และระดับ Hot ใช้วัดตอนที่เครื่องยนต์มีการใช้งานแล้วเกินกว่า 15 นาที (ระดับความร้อนเครื่องยนต์ในระดับวิ่งปกติ) ซึ่งการวัดในช่วง Hot จะได้ผลดีกว่า ดังนั้นเราจึงอุ่นเครื่องรถด้วยการขับก่อนประมาณ 15 นาที (หรือวัดตอนใช้รถถึงที่หมายแล้วก็ดี)',
            image: 'https://www.autoinfo.co.th/wp-content/uploads/2017/04/38.jpg',

        },
        {
            id: '15',
            name: 'ตรวจสอบระดับน้ำมันเฟืองท้าย',
            price: 1000,
            detail: 'ท่านที่เคยใช้รถขับเคลื่อนล้อหลังคงจะรู้จัก “เฟืองท้าย” กันเป็นอย่างดี แต่บ่อยครั้งที่เจ้า “เฟืองท้าย” โดยเฉพาะในรถขับเคลื่อนล้อหลัง ถูกละเลยมองข้ามจนเกิดอาการหอนและชำรุดเสียหายในที่สุด “รู้ก่อนเหยียบ” จึงขอนำทุกท่านมาทำความรู้จักกับเจ้าเฟืองท้าย พร้อมวิธีบำรุงรักษา “เฟืองท้าย” (Differential, final gear) เป็นชุดอุปกรณ์สำหรับถ่ายทอดกำลังจากเครื่องยนต์ผ่านชุดเกียร์ ก่อนส่งผ่านไปยังล้อเพื่อให้เกิดการหมุนทำให้รถเคลื่อนที่ได้ ทั้งนี้ “เฟืองท้าย” มีอยู่ทั้งในรถขับเคลื่อนล้อหน้าและล้อหลัง เพียงแต่ในรถขับเคลื่อนล้อหน้า เฟืองท้ายจะถูกรวมอยู่ในห้องเกียร์',
            image: 'https://f.ptcdn.info/697/015/000/1392477539-162JPG-o.jpg',

        },
        {
            id: '16',
            name: 'ตรวจสอบสภาพสีและลักษณะของน้ำมันเฟืองท้าย',
            price: 1000,
            detail: 'การทำงานของเฟืองทั้ง 4 ไม่ได้ซับซ้อนอะไรมาก ส่วนระยะเวลาที่ควรเปลี่ยนถ่ายน้ำมันเฟืองท้ายประมาณ 40,000 กิโลเมตร และก่อนการตรวจเช็กระดับน้ำมันเฟืองท้าย ดูให้ดีก่อนว่าน้ำมันเฟืองท้ายยังร้อนอยู่หรือไม่ เพราะหากเพิ่งผ่านการใช้งานน้ำมันยังร้อนอยู่อาจถูกลวกมือได้ และอีกข้อที่สำคัญ น้ำมันเฟืองท้ายที่จะใช้เติมต้องตรงตามค่าที่ผู้ผลิตรถยนต์กำหนดมาให้ หากเติมผิดเบอร์ ผิดประเภท อาจก่อให้เกิดความเสียหายกับชุดเฟืองท้ายได้',
            image: 'http://image.free.in.th/z/iz/3pek1.jpg',

        },
        {
            id: '17',
            name: 'ตรวจสอบสภาพยางหุ้มเพลาขับ หน้า – หลัง',
            price: 1000,
            detail: 'ปัญหาอยู่ที่เมื่อใดก็ตามที่ยางกันฝุ่นของเพลาขับฉีกขาด แล้วไม่ได้ถูกซ่อมทันที ความเสียหายมากกว่านี้หลายเท่าจะตามมา เมื่อมันเริ่มฉีกขาดเป็นแผลเล็กๆ มันจะไม่หยุดอยู่เท่านั้น ทุกครั้งที่เราเลี้ยวรถ ยางกันฝุ่นจะถูกยืดอย่างแรง 1 ครั้งต่อ 1 รอบที่ล้อหมุน “แผล” จะฉีกกว้างขึ้นอย่างรวดเร็ว ฝุ่นและทรายจะเข้าไปผสมกับจาระบี ทำลายผิวของเม็ดลูกปืนและราง ซึ่งมีความละเอียดระดับ 1 ใน 1,000 ส่วนของมิลลิเมตร ยังโชคดีหน่อยที่ในระยะแรกนี้ จาระบี จะถูกสลัดออกมาโดยแรงเหวี่ยง จึงพาฝุ่นและทรายส่วนหนึ่งกลับออกมาได้ก่อนที่จะเกิดความเสียหาย และเมื่อจาระบีส่วนใหญ่ถูกสลัดออกมาหมด ก็จะถึงช่วงความเสียหายร้ายแรง ทั้งความร้อนที่เกิดขึ้นจากการเสียดสี ที่มีฝุ่นและทรายช่วยเพิ่มการสึกหรอขึ้นอีกจนสามารถทำให้ข้อต่อที่เรียกกันว่า CVJ (CONSTANT VELOCITY JOINTS) นี้ หมดสภาพใช้งานภายในไม่กี่ 100 กิโลเมตร',
            image: 'https://www.autoinfo.co.th/wp-content/uploads/2013/02/2013020113193627.jpg',

        },
        {
            id: '18',
            name: 'ตรวจสอบสภาพลูกหมากต่างๆ',
            price: 1000,
            detail: 'เมื่อท่านผู้ใช้รถสามารถทำให้รถของท่านอยู่ในสภาวะลอยตัว หรือเมื่อท่านผู้ใช้รถสามารถทำให้รถยนต์ของท่านลอยอยู่เหนือพื้น ในสภาวะไร้แรงกดทับบนล้อได้แล้ว ก็มาเริ่มกันเลยครับ โดยเริ่มจาก การปรับความสูงของล้อให้อยู่ในแนวขนานกับอก (เพราะเป็นตำแหน่งที่มนุษย์ทั่วไป สามารถออกแรงแขนได้อย่างพอดี ไม่ว่าจะเป็นการดึง หรือผลัก ดันออกไป)',
            image: 'https://i.ytimg.com/vi/LtCIXNrXPkI/maxresdefault.jpg',

        },
        {
            id: '19',
            name: 'ตรวจสอบการรั่วซึมและการคืนตัวของโช้คอัพ',
            price: 1000,
            detail: 'โช้คอัพ เป็นอุปกรณ์ที่ช่วยรองรับแรงกระแทก ลดแรงสั่นสะเทือนของรถ และยังทำหน้าที่หน่วงการเคลื่อนที่ขึ้นลงของตัวถังรถยนต์ ถ้าเกิดโช้คอัพรถมีปัญหาจะส่งผลให้รถเสียศูนย์ เกิดอาการร่อน เมื่อวิ่งทำความเร็ว เข้าโค้งรถจะโคลงควบคุมได้ยาก อีกทั้งความนุ่มนวลของการขับรถจะหายไปอย่างมาก ซึ่งกรณีที่ร้ายแรงเมื่อเบรกกระทันหันอาจทำให้รถพลิกคว่ำได้เลยทีเดียว',
            image: 'https://s.isanook.com/au/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2F1LzAvdWQvMTEvNTkyOTcvMi5qcGc=.jpg',

        },
        {
            id: '20',
            name: 'ตรวจสอบลูกปืนล้อ',
            price: 1000,
            detail: 'การตรวจจับอาการลูกปืนล้อแตกในเบื้องต้นจำเป็นต้องอาศัยทักษะในการฟังเสียง กล่าวคือ ในระหว่างการขับขี่รถยนต์จะได้ยินเสียงหอนอู้ ๆ จากล้อ ซึ่งจะเพิ่มความดังตามความเร็วรถ จึงลองทดสอบได้ด้วยการเพิ่มเกียร์สูงหรือเหยียบคันเร่งเพิ่มความเร็วรถให้มากขึ้น คราวนี้อาจจะดังจนคนนั่งในรถรู้สึกหูอื้อได้เลย หากเป็นตามนี้ก็แสดงว่าลูกปืนล้อแตกแล้ว ลำดับต่อไปคือต้องช่วยกันฟังว่าเสียงดังมาจากจุดใด หากมาจากด้านล้อหน้า จะทำให้ผู้ขับขี่และคนนั่งข้างได้ยินเสียงดังที่ชัดเจน หากเป็นล้อฝั่งคนขับจะจับเสียงดังได้ง่ายที่สุด แต่หากเป็นล้อหลังต้องอาศัยผู้นั่งโดยสารเบาะหลังช่วยฟังเสียงว่าดังมาจากด้านล้อหลังซ้ายหรือขวา เรียกได้ว่าต้องช่วยกันสังเกตในขณะที่รถวิ่งเครื่องยนต์ทำงานอยู่เท่านั้น',
            image: 'https://img.khaorot.com/crop/480x293/2018/07/28/rGTHyD9i/wheel-bearing-237a.jpg',

        },
        {
            id: '21',
            name: 'ตรวจสอบบูชและลูกยางช่วงล่างทั้งหมด',
            price: 1000,
            detail: 'ถ้าพูดถึงช่วงล่างของรถยนต์แล้วการตรวจสอบด้วยตัวเองนั้นค่อนข้างจะทำยากสักนิดเพราะต้องมีเครื่องมือและอาศัยความชำนาญของช่างยนต์เป็นพิเศษ แต่ถึงแม้ว่าคุณจะไม่ได้เป็นช่างยนต์ที่มีความรู้ความชำนาญเกี่ยวกับเครื่องยนต์และไม่มีเครื่องมือใดๆ ในการตรวจสอบช่วงล่างของรถยนต์ แต่คุณก็ยังสามารถตรวจสอบช่วงล่างของรถยนต์ได้ด้วยการสังเกต ซึ่งนี่ก็เป็นวิธีที่ดีสุดสำหรับการตรวจเช็คช่วงล่างรถยนต์ด้วยตัวเองโดยการสังเกตจากการแสดงอาการของรถยนต์ที่จะบ่งบอกให้คุณรู้เองว่าช่วงล่างรถยนต์กำลังมีปัญหา',
            image: 'http://ทรายโตโยต้าแท็กซี่.com/v2/wp-content/uploads/2015/07/suspensionToyoya-saitoyotataxi.jpg',

        },
        {
            id: '22',
            name: 'ตรวจสอบสภาพและการรั่วซึมของสายอ่อนเบรก',
            price: 1000,
            detail: 'สายอ่อนเบรคแตก สายอ่อนที่ใช้งานมานานจะเกิดอาการบวม แม้ภายนอกอาจมองไม่เห็นสิ่งผิดปกติแต่เมื่อขับรถและเหยียบเบรคกลับจะเกิดการพองตัวเหมือนลูกโป่ง ซึ่งถือว่าอันตรายมาก หากเหยียบเบาๆ แรงดันน้ำมันเบรคต่ำ อาจจะไม่เกิดอะไร แต่ถ้าเกิดเหตุการณ์ขับคัน จนต้องเบรคแรง ๆ สายอ่อนเบรคจะไม่สามารถรับแรงดันไหวและแตกออกมา ทำให้รถเกิดอันตรายได้',
            image: 'https://energycarservice.com/upload-img/14152158_10153742833100846_611985123_o_1.jpg',

        },
        {
            id: '23',
            name: 'ตรวจสอบการสึกหรอของจานเบรก',
            price: 1000,
            detail: 'สาเหตุเกิดจาก ความร้อนของจานเบรกที่สูงเกินไป จานเบรกที่ใช้งานหนักอาจจะเกิดความร้อนสูงกว่า 1,000 องศา จานเบรกอาจเกิดการไหม้แดง เหมือนเหล็กถูกเผาไฟ และเกิดการขยายตัวมาก การระบายความร้อนของจานเบรกไม่ดี ผ้าเบรกที่มีคุณสมบัติในการทนความร้อนต่ำ จะเกิดการลุกไหม้เสียหาย ไม่สามารถจับจานเบรกให้อยู่ได้ รวมถึงน้ำมันเบรกที่คุณสมบัติในการทนความร้อนต่ำ จะทำให้น้ำมันเบรกเดือด เกิดการขยายตัวเป็นฟองอากาศ ทำให้แรงดันไฮโดลิคลดต่ำลง อาการเบรกเฟดนี้ ถือเป็นปัญหาของนักซิ่ง ที่ชอบใช้เบรกแบบรุนแรง เบรกบ่อยๆติดต่อกัน และ รถที่ขับด้วย ความเร็วสูง',
            image: 'https://s.isanook.com/au/0/ud/1/5694/10-07-2556_14-45-09.jpg',

        },
        {
            id: '24',
            name: 'ตรวจสอบสภาพผ้าเบรก',
            price: 1000,
            detail: 'ผ้าเบรคหมด บ่อยครั้งที่ผ้าเบรคหมดนาน ๆ แต่ไม่ได้รับการเปลี่ยน จนทำให้หลุดออกมาจากฝักก้ามปูเบรค และถ้าหากลูกสูบผ้าเบรคหลุด เบรคก็จะแตกทันที',
            image: 'https://auto.mthai.com/app/uploads/2018/01/iStock-497231265-600x400.jpg',

        },
        {
            id: '25',
            name: 'ตรวจสอบระดับน้ำมันเบรก',
            price: 1000,
            detail: 'เกิดการรั่วของน้ำมันเบรค เช่น สายอ่อนเบรคแตก ท่อแป๊ปเบรคแตก หรือน้ำมันเบรครั่วซึมเป็นเวลานาน ลูกยางแม่ปั้มเบรคและแม่ปั้มเบรคเก่า เกิดการเสียหายจนน้ำมันเบรครั่วออกมา',
            image: 'http://www.easyinsure.co.th/news/wp-content/uploads/chek-632x474.jpg',

        },
        {
            id: '26',
            name: 'ตรวจสอบความชื้นและสีของน้ำมันเบรก',
            price: 1000,
            detail: 'ควรเปลี่ยนถ่ายน้ำมันเครื่องปีละครั้ง เพื่อป้องกันไม่ให้ระบบเบรคเกิดสนิมน้ำมันเบรค ควรใช้ให้ตรงกับมารตราฐานที่ผู้ผลิตกำหนด เช่น DOT3 จะไม่สามารถนำน้ำมันเบรค DOT อื่นมาผสมได้ หรือนำน้ำมันอื่นมาเติมแทน เพราะจะทำให้ลูกยางเบรกเกิดอาการบวมได้',
            image: 'https://file.chobrod.com/2018/01/23/ckWT88ae/brake-fluid-dirty-8825.jpg',

        },
        {
            id: '27',
            name: 'ตรวจสอบสภาพไส้กรองแอร์',
            price: 1000,
            detail: 'ไส้กรองแอร์ถือว่าเป็นอีกหนึ่งชิ้นส่วนที่สำคัญ เนื่องจาก จะส่งผลต่อสุขภาพของผู้ขับขี่และผู้โดยสารโดยตรง ทั้งนี้ไส้กรองแอร์จะช่วยดักจับฝุ่นละออง เชื้อโรคต่างๆ ในอากาศที่เข้ามาจับสะสมอยู่ที่คอยล์เย็น หากมีการสะสมของสิ่งสกปรกและเชื้อโรคเป็นเวลานาน นอกจากจะเป็นแหล่งพาหะของเชื้ออโรคชนิดต่างๆแล้ว ยังสามารถก่อให้เกิดการกัดกร่อนที่แผงคอยล์เย็นจนทำให้เกิดรูรั่วได้ ซึ่งจะเป็นสาเหตุของกลิ่นเหม็นจากแอร์ แอร์ไม่เย็น',
            image: 'https://i.ytimg.com/vi/baM6E7X4PjQ/maxresdefault.jpg',

        },
        {
            id: '28',
            name: 'ตรวจเช็คสภาพแบตเตอรี่และระดับน้ำกลั่น',
            price: 1000,
            detail: 'แน่นอน เราได้ทำความสะอาดตัวแบตเตอรีแล้ว แต่ในส่วนของรูเติมน้ำกลั่นนั้น อาจจะมีคราบสกปรกติดค้างอยู่ ก็สามารถทำความสะอาดเพิ่มเติมได้ ด้วยการใช้น้ำยาเช็ดกระจก ฉีดใส่กระดาษทิชชูเล็กน้อย และเช็ดไปตรงบริเวณใกล้ๆ รูเติมน้ำกลั่น ซึ่งควรระวังไม่ให้ตัวน้ำยาเช็ดกระจก หรือ เศษกระดาษทิชชู หล่นลงไปในรูเติมน้ำกลั่น',
            image: 'https://i.ytimg.com/vi/fMd9FmpgzP8/maxresdefault.jpg',

        },
        {
            id: '29',
            name: 'ระบบไฟส่องสว่างและสัญญาณไฟต่างๆ',
            price: 1000,
            detail: 'ปกติแล้วก่อนการเดินทางไกลเรามักตรวจสอบความพร้อมของรถก่อนการเดินทางกันใช่ไหมครับ? นอกจากความพร้อมของเครื่องยนต์หรือระบบเบรกแล้ว ยังมีเรื่องของไฟหน้ารถและไฟท้ายรถที่เราไม่ควรจะมองข้ามด้วยเพราะเป็นเรื่องของทัศนวิสัยที่เราต้องใช้ในการเดินทางโดยเฉพาะในเวลากลางคืนรวมถึงส่งผลต่อความปลอดภัยในการใช้รถเพื่อนร่วมถนนด้วยตามข่าวที่เจ้าหน้าที่คุมเข้มเรื่องไฟตัดหมอก-ซีนอน',
            image: 'https://3.bp.blogspot.com/-5kT18FLQz48/XApRX4Qw1rI/AAAAAAAATFk/GBNG3zRWd1cIaB1yNKzOzps-g-rbJM9ZQCLcBGAs/s1600/%25E0%25B8%258A%25E0%25B9%2588%25E0%25B8%25B2%25E0%25B8%2587%25E0%25B8%25A7%25E0%25B8%25B1%25E0%25B8%2594%25E0%25B8%2584%25E0%25B9%2588%25E0%25B8%25B2%25E0%25B9%2581%25E0%25B8%25AA%25E0%25B8%2587.jpg',

        },
        {
            id: '30',
            name: 'ตรวจสอบยางใบปัดน้ำฝน',
            price: 1000,
            detail: 'วิธีการสังเกตว่าถึงได้เวลาหรือยังที่จะต้องเปลี่ยนใบปัดน้ำฝน โดยดูง่ายๆ ว่าการทำงานของใบปัดน้ำฝนนั้นปัดสะอาดหรือไม่  ลักษณะของการปัดน้ำฝนไม่สะอาดเนื่องจากการใช้ใบปัดน้ำฝนที่เสื่อมสภาพ หรือติดตั้งผิดวิธี คือ เกิดละอองน้ำเป็นสันครึ่งวงกลมหรือแถบเส้น หลังจากที่ปัดกระจกแล้วยังมีละอองน้ำเป็นเส้นสันครึ่งวงกลม หรือเป็นม่านบนกระจกและมัว เกิดจากการใช้ยางปัดที่มีอาการแข็งจนกรอบแตก ทำให้ไม่สามารถปาดน้ำจากหน้า กระจกได้สะอาดไม่สามารถจะรีดเอาน้ำออกจากกระจกได้หมด อีกอาการคือ มีเสียงดังรบกวน ใบปัดจะมีเสียงดังเอี๊ยดๆ และมีอาการกระตุกขณะทำงานซึ่งเกิดจากการเสียดสีระหว่างใบปัดน้ำฝนกับหน้ากระจก',
            image: 'https://auto.mthai.com/app/uploads/2017/06/iStock-621272512.jpg',

        },
    ],

})
export const mutations = {

    addcart(state, product) {
        state.counter++
            state.cart.push(product)
    },
    removecart(state, index) {
        state.counter--
            state.cart.splice(index, 1)
    },
}