import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="dark:bg-[black] flex flex-col gap-[10px]">
      <Accordion data-aos="fade-down"
     data-aos-duration="3000" className="dark:bg-black  dark:shadow-[white] dark:shadow-[0_5px_10px_0]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            minHeight: "75px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
          className="dark:bg-black"

        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#304560",
              lineHeight: "24px",
            }}

          >
            Могу ли я купить виртуальный выделенный сервер (VDS) в #CloudMTS?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#728399",
              lineHeight: "24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-up"
     data-aos-duration="3000" className="dark:bg-black  dark:shadow-[white] dark:shadow-[0_5px_10px_0]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            minHeight: "75px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="dark:bg-black "

        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#304560",
              lineHeight: "24px",
            }}
          >
            Какие существуют способы подключения к Elastic Cloud извне?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#728399",
              lineHeight: "24px",
            }}
          >
            В основе Elastic cloud используется виртуализация VMware Миграция на
            VMware возможна не только с других систем виртуализации (MS Hyper-V,
            XenServer), но и с «железных» серверов без виртуализации. Это более
            сложный и длительный процесс, чем миграция в рамках одной системы
            виртуализации. Но у #CloudМТS есть опыт проведения миграции
            клиентских систем c физических серверов без виртуализации и
            инфраструктуры Hyper-V.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-down"
     data-aos-duration="3000" className="dark:bg-black  dark:shadow-[white] dark:shadow-[0_5px_10px_0]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            minHeight: "75px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="dark:bg-black "

        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#304560",
              lineHeight: "24px",
            }}
          >
            Можно ли самостоятельно управлять ресурсами Elastic Cloud: создавать виртуальные машины, настраивать сети, управлять маршрутизацией и т.д.?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#728399",
              lineHeight: "24px",
            }}
          >
            В основе Elastic cloud используется виртуализация VMware Миграция на
            VMware возможна не только с других систем виртуализации (MS Hyper-V,
            XenServer), но и с «железных» серверов без виртуализации. Это более
            сложный и длительный процесс, чем миграция в рамках одной системы
            виртуализации. Но у #CloudМТS есть опыт проведения миграции
            клиентских систем c физических серверов без виртуализации и
            инфраструктуры Hyper-V.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-up"
     data-aos-duration="3000" className="dark:bg-black  dark:shadow-[white] dark:shadow-[0_5px_10px_0]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            minHeight: "75px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="dark:bg-black "

        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#304560",
              lineHeight: "24px",
            }}
          >
            При необходимости реализации Disaster recovery plan, возможно ли разнести части размещаемого в Elastic Cloud ИТ-сервиса между двумя территориально разнесенными площадками?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#728399",
              lineHeight: "24px",
            }}
          >
            В основе Elastic cloud используется виртуализация VMware Миграция на
            VMware возможна не только с других систем виртуализации (MS Hyper-V,
            XenServer), но и с «железных» серверов без виртуализации. Это более
            сложный и длительный процесс, чем миграция в рамках одной системы
            виртуализации. Но у #CloudМТS есть опыт проведения миграции
            клиентских систем c физических серверов без виртуализации и
            инфраструктуры Hyper-V.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion data-aos="fade-down"
     data-aos-duration="3000" className="dark:bg-black  dark:shadow-[white] dark:shadow-[0_5px_10px_0]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            minHeight: "75px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="dark:bg-black "

        >
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#304560",
              lineHeight: "24px",
            }}
          >
            Возможна миграция в Elastic Cloud c гипервизоров MS Hyper-V, XenServer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#728399",
              lineHeight: "24px",
            }}
          >
            В основе Elastic cloud используется виртуализация VMware Миграция на
            VMware возможна не только с других систем виртуализации (MS Hyper-V,
            XenServer), но и с «железных» серверов без виртуализации. Это более
            сложный и длительный процесс, чем миграция в рамках одной системы
            виртуализации. Но у #CloudМТS есть опыт проведения миграции
            клиентских систем c физических серверов без виртуализации и
            инфраструктуры Hyper-V.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
