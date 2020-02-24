import * as React from 'react';
import { BaseIconProps } from './types';

interface UploadIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const UploadIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: UploadIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.05 3.5865V10C7.05 10.2485 7.25147 10.45 7.5 10.45C7.74853 10.45 7.95 10.2485 7.95 10V3.5865L10.1818 5.8183C10.3575 5.99404 10.6425 5.99404 10.8182 5.8183C10.9939 5.64257 10.9939 5.35764 10.8182 5.18191L7.82336 2.18707C7.74155 2.10255 7.62691 2.05002 7.5 2.05002C7.37309 2.05002 7.25845 2.10255 7.17664 2.18707L4.1818 5.18191C4.00607 5.35764 4.00607 5.64257 4.1818 5.8183C4.35754 5.99404 4.64246 5.99404 4.8182 5.8183L7.05 3.5865ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H4.00744H4.01855H4.0297H4.04088H4.05209H4.06333H4.0746H4.0859H4.09722H4.10858H4.11997H4.13138H4.14283H4.1543H4.16581H4.17734H4.1889H4.20049H4.21211H4.22375H4.23543H4.24713H4.25886H4.27062H4.28241H4.29422H4.30606H4.31793H4.32983H4.34175H4.3537H4.36568H4.37768H4.38971H4.40177H4.41385H4.42596H4.43809H4.45026H4.46244H4.47466H4.4869H4.49916H4.51145H4.52377H4.53611H4.54847H4.56086H4.57328H4.58572H4.59819H4.61068H4.62319H4.63573H4.64829H4.66088H4.67349H4.68612H4.69878H4.71146H4.72416H4.73689H4.74964H4.76242H4.77522H4.78804H4.80088H4.81374H4.82663H4.83954H4.85247H4.86543H4.87841H4.8914H4.90442H4.91747H4.93053H4.94361H4.95672H4.96985H4.98299H4.99616H5.00935H5.02256H5.03579H5.04905H5.06232H5.07561H5.08892H5.10225H5.11561H5.12898H5.14237H5.15578H5.16921H5.18266H5.19613H5.20961H5.22312H5.23665H5.25019H5.26375H5.27733H5.29093H5.30455H5.31818H5.33184H5.34551H5.35919H5.3729H5.38662H5.40037H5.41412H5.4279H5.44169H5.4555H5.46933H5.48317H5.49703H5.5109H5.52479H5.5387H5.55262H5.56656H5.58052H5.59449H5.60848H5.62248H5.63649H5.65053H5.66457H5.67864H5.69271H5.7068H5.72091H5.73503H5.74917H5.76332H5.77748H5.79166H5.80585H5.82005H5.83427H5.8485H5.86275H5.87701H5.89128H5.90557H5.91986H5.93417H5.9485H5.96283H5.97718H5.99154H6.00591H6.0203H6.0347H6.0491H6.06352H6.07796H6.0924H6.10685H6.12132H6.1358H6.15029H6.16478H6.17929H6.19381H6.20834H6.22289H6.23744H6.252H6.26657H6.28115H6.29574H6.31034H6.32495H6.33957H6.3542H6.36884H6.38349H6.39815H6.41281H6.42749H6.44217H6.45686H6.47156H6.48627H6.50098H6.51571H6.53044H6.54518H6.55993H6.57468H6.58944H6.60421H6.61899H6.63377H6.64856H6.66336H6.67816H6.69297H6.70779H6.72261H6.73744H6.75228H6.76712H6.78197H6.79682H6.81168H6.82654H6.84141H6.85629H6.87117H6.88605H6.90094H6.91584H6.93074H6.94564H6.96055H6.97546H6.99038H7.0053H7.02022H7.03515H7.05008H7.06502H7.07996H7.0949H7.10985H7.1248H7.13975H7.1547H7.16966H7.18462H7.19958H7.21455H7.22951H7.24448H7.25945H7.27443H7.2894H7.30438H7.31936H7.33434H7.34932H7.3643H7.37928H7.39427H7.40925H7.42424H7.43922H7.45421H7.4692H7.48419H7.49917H7.51416H7.52915H7.54413H7.55912H7.57411H7.58909H7.60408H7.61906H7.63404H7.64903H7.66401H7.67899H7.69396H7.70894H7.72392H7.73889H7.75386H7.76883H7.78379H7.79876H7.81372H7.82868H7.84364H7.85859H7.87354H7.88849H7.90344H7.91838H7.93332H7.94825H7.96318H7.97811H7.99303H8.00795H8.02287H8.03778H8.05269H8.06759H8.08249H8.09738H8.11227H8.12716H8.14203H8.15691H8.17178H8.18664H8.2015H8.21635H8.23119H8.24604H8.26087H8.2757H8.29052H8.30534H8.32014H8.33495H8.34974H8.36453H8.37931H8.39409H8.40886H8.42362H8.43837H8.45312H8.46785H8.48258H8.49731H8.51202H8.52673H8.54142H8.55611H8.57079H8.58547H8.60013H8.61478H8.62943H8.64407H8.65869H8.67331H8.68792H8.70252H8.71711H8.73169H8.74626H8.76082H8.77536H8.7899H8.80443H8.81895H8.83346H8.84795H8.86244H8.87691H8.89138H8.90583H8.92027H8.9347H8.94912H8.96352H8.97792H8.9923H9.00667H9.02103H9.03537H9.04971H9.06403H9.07834H9.09263H9.10691H9.12118H9.13544H9.14968H9.16391H9.17812H9.19233H9.20652H9.22069H9.23485H9.249H9.26313H9.27725H9.29135H9.30544H9.31951H9.33357H9.34761H9.36164H9.37566H9.38966H9.40364H9.41761H9.43156H9.44549H9.45941H9.47332H9.48721H9.50108H9.51493H9.52877H9.54259H9.5564H9.57019H9.58396H9.59771H9.61145H9.62517H9.63887H9.65256H9.66622H9.67987H9.6935H9.70712H9.72071H9.73429H9.74785H9.76139H9.77491H9.78841H9.80189H9.81536H9.8288H9.84223H9.85563H9.86902H9.88239H9.89574H9.90906H9.92237H9.93566H9.94893H9.96217H9.9754H9.98861H10.0018H10.015H10.0281H10.0412H10.0543H10.0674H10.0805H10.0935H10.1065H10.1195H10.1325H10.1454H10.1584H10.1713H10.1841H10.197H10.2098H10.2227H10.2355H10.2482H10.261H10.2737H10.2864H10.2991H10.3117H10.3243H10.337H10.3495H10.3621H10.3746H10.3871H10.3996H10.4121H10.4245H10.4369H10.4493H10.4617H10.474H10.4863H10.4986H10.5109H10.5231H10.5353H10.5475H10.5596H10.5718H10.5839H10.5959H10.608H10.62H10.632H10.644H10.6559H10.6679H10.6797H10.6916H10.7034H10.7153H10.727H10.7388H10.7505H10.7622H10.7739H10.7855H10.7971H10.8087H10.8203H10.8318H10.8433H10.8548H10.8662H10.8776H10.889H10.9003H10.9117H10.9229H10.9342H10.9454H10.9566H10.9678H10.979H10.9901H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H10.9901H10.979H10.9678H10.9566H10.9454H10.9342H10.9229H10.9117H10.9003H10.889H10.8776H10.8662H10.8548H10.8433H10.8318H10.8203H10.8087H10.7971H10.7855H10.7739H10.7622H10.7505H10.7388H10.727H10.7153H10.7034H10.6916H10.6797H10.6679H10.6559H10.644H10.632H10.62H10.608H10.5959H10.5839H10.5718H10.5596H10.5475H10.5353H10.5231H10.5109H10.4986H10.4863H10.474H10.4617H10.4493H10.4369H10.4245H10.4121H10.3996H10.3871H10.3746H10.3621H10.3495H10.337H10.3243H10.3117H10.2991H10.2864H10.2737H10.261H10.2482H10.2355H10.2227H10.2098H10.197H10.1841H10.1713H10.1584H10.1454H10.1325H10.1195H10.1065H10.0935H10.0805H10.0674H10.0543H10.0412H10.0281H10.015H10.0018H9.98861H9.9754H9.96217H9.94893H9.93566H9.92237H9.90906H9.89574H9.88239H9.86902H9.85563H9.84223H9.8288H9.81536H9.80189H9.78841H9.77491H9.76139H9.74785H9.73429H9.72071H9.70712H9.6935H9.67987H9.66622H9.65256H9.63887H9.62517H9.61145H9.59771H9.58396H9.57019H9.5564H9.54259H9.52877H9.51493H9.50108H9.48721H9.47332H9.45941H9.44549H9.43156H9.41761H9.40364H9.38966H9.37566H9.36164H9.34761H9.33357H9.31951H9.30544H9.29135H9.27725H9.26313H9.249H9.23485H9.22069H9.20652H9.19233H9.17812H9.16391H9.14968H9.13544H9.12118H9.10691H9.09263H9.07834H9.06403H9.04971H9.03537H9.02103H9.00667H8.9923H8.97792H8.96352H8.94912H8.9347H8.92027H8.90583H8.89138H8.87691H8.86244H8.84795H8.83346H8.81895H8.80443H8.7899H8.77536H8.76082H8.74626H8.73169H8.71711H8.70252H8.68792H8.67331H8.65869H8.64407H8.62943H8.61478H8.60013H8.58547H8.57079H8.55611H8.54142H8.52673H8.51202H8.49731H8.48258H8.46785H8.45312H8.43837H8.42362H8.40886H8.39409H8.37931H8.36453H8.34974H8.33495H8.32014H8.30534H8.29052H8.2757H8.26087H8.24604H8.23119H8.21635H8.2015H8.18664H8.17178H8.15691H8.14203H8.12716H8.11227H8.09738H8.08249H8.06759H8.05269H8.03778H8.02287H8.00795H7.99303H7.97811H7.96318H7.94825H7.93332H7.91838H7.90344H7.88849H7.87354H7.85859H7.84364H7.82868H7.81372H7.79876H7.78379H7.76883H7.75386H7.73889H7.72392H7.70894H7.69396H7.67899H7.66401H7.64903H7.63404H7.61906H7.60408H7.58909H7.57411H7.55912H7.54413H7.52915H7.51416H7.49917H7.48419H7.4692H7.45421H7.43922H7.42424H7.40925H7.39427H7.37928H7.3643H7.34932H7.33434H7.31936H7.30438H7.2894H7.27443H7.25945H7.24448H7.22951H7.21455H7.19958H7.18462H7.16966H7.1547H7.13975H7.1248H7.10985H7.0949H7.07996H7.06502H7.05008H7.03515H7.02022H7.0053H6.99038H6.97546H6.96055H6.94564H6.93074H6.91584H6.90094H6.88605H6.87117H6.85629H6.84141H6.82654H6.81168H6.79682H6.78197H6.76712H6.75228H6.73744H6.72261H6.70779H6.69297H6.67816H6.66336H6.64856H6.63377H6.61899H6.60421H6.58944H6.57468H6.55993H6.54518H6.53044H6.51571H6.50098H6.48627H6.47156H6.45686H6.44217H6.42749H6.41281H6.39815H6.38349H6.36884H6.3542H6.33957H6.32495H6.31034H6.29574H6.28115H6.26657H6.252H6.23744H6.22289H6.20834H6.19381H6.17929H6.16478H6.15029H6.1358H6.12132H6.10685H6.0924H6.07796H6.06352H6.0491H6.0347H6.0203H6.00591H5.99154H5.97718H5.96283H5.9485H5.93417H5.91986H5.90557H5.89128H5.87701H5.86275H5.8485H5.83427H5.82005H5.80585H5.79166H5.77748H5.76332H5.74917H5.73503H5.72091H5.7068H5.69271H5.67864H5.66457H5.65053H5.63649H5.62248H5.60848H5.59449H5.58052H5.56656H5.55262H5.5387H5.52479H5.5109H5.49703H5.48317H5.46933H5.4555H5.44169H5.4279H5.41412H5.40037H5.38662H5.3729H5.35919H5.34551H5.33184H5.31818H5.30455H5.29093H5.27733H5.26375H5.25019H5.23665H5.22312H5.20961H5.19613H5.18266H5.16921H5.15578H5.14237H5.12898H5.11561H5.10225H5.08892H5.07561H5.06232H5.04905H5.03579H5.02256H5.00935H4.99616H4.98299H4.96985H4.95672H4.94361H4.93053H4.91747H4.90442H4.8914H4.87841H4.86543H4.85247H4.83954H4.82663H4.81374H4.80088H4.78804H4.77522H4.76242H4.74964H4.73689H4.72416H4.71146H4.69878H4.68612H4.67349H4.66088H4.64829H4.63573H4.62319H4.61068H4.59819H4.58572H4.57328H4.56086H4.54847H4.53611H4.52377H4.51145H4.49916H4.4869H4.47466H4.46244H4.45026H4.43809H4.42596H4.41385H4.40177H4.38971H4.37768H4.36568H4.3537H4.34175H4.32983H4.31793H4.30606H4.29422H4.28241H4.27062H4.25886H4.24713H4.23543H4.22375H4.21211H4.20049H4.1889H4.17734H4.16581H4.1543H4.14283H4.13138H4.11997H4.10858H4.09722H4.0859H4.0746H4.06333H4.05209H4.04088H4.0297H4.01855H4.00744H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M6.5 4.9143V10C6.5 10.5523 6.94772 11 7.5 11C8.05228 11 8.5 10.5523 8.5 10V4.9143L9.79289 6.20719C10.1834 6.59772 10.8166 6.59772 11.2071 6.20719C11.5976 5.81667 11.5976 5.1835 11.2071 4.79298L8.21484 1.80072C8.17916 1.76425 8.14072 1.7305 8.09984 1.6998C8.06273 1.67192 8.02412 1.64695 7.98433 1.62491C7.84084 1.54532 7.67571 1.5 7.5 1.5C7.32429 1.5 7.15916 1.54532 7.01567 1.62491C6.97588 1.64695 6.93727 1.67192 6.90016 1.6998C6.85928 1.7305 6.82084 1.76425 6.78516 1.80072L3.79289 4.79298C3.40237 5.1835 3.40237 5.81667 3.79289 6.20719C4.18342 6.59772 4.81658 6.59772 5.20711 6.20719L6.5 4.9143ZM2.5 9.49999C3.05228 9.49999 3.5 9.9477 3.5 10.5V12C3.5 12.2793 3.72338 12.5 3.99635 12.5H4.00744H4.01855H4.0297H4.04088H4.05209H4.06333H4.0746H4.0859H4.09722H4.10858H4.11997H4.13138H4.14283H4.1543H4.16581H4.17734H4.1889H4.20049H4.21211H4.22375H4.23543H4.24713H4.25886H4.27062H4.28241H4.29422H4.30606H4.31793H4.32983H4.34175H4.3537H4.36568H4.37768H4.38971H4.40177H4.41385H4.42596H4.43809H4.45026H4.46244H4.47466H4.4869H4.49916H4.51145H4.52377H4.53611H4.54847H4.56086H4.57328H4.58572H4.59819H4.61068H4.62319H4.63573H4.64829H4.66088H4.67349H4.68612H4.69878H4.71146H4.72416H4.73689H4.74964H4.76242H4.77522H4.78804H4.80088H4.81374H4.82663H4.83954H4.85247H4.86543H4.87841H4.8914H4.90442H4.91747H4.93053H4.94361H4.95672H4.96985H4.98299H4.99616H5.00935H5.02256H5.03579H5.04905H5.06232H5.07561H5.08892H5.10225H5.11561H5.12898H5.14237H5.15578H5.16921H5.18266H5.19613H5.20961H5.22312H5.23665H5.25019H5.26375H5.27733H5.29093H5.30455H5.31818H5.33184H5.34551H5.35919H5.3729H5.38662H5.40037H5.41412H5.4279H5.44169H5.4555H5.46933H5.48317H5.49703H5.5109H5.52479H5.5387H5.55262H5.56656H5.58052H5.59449H5.60848H5.62248H5.63649H5.65053H5.66457H5.67864H5.69271H5.7068H5.72091H5.73503H5.74917H5.76332H5.77748H5.79166H5.80585H5.82005H5.83427H5.8485H5.86275H5.87701H5.89128H5.90557H5.91986H5.93417H5.9485H5.96283H5.97718H5.99154H6.00591H6.0203H6.0347H6.0491H6.06352H6.07796H6.0924H6.10685H6.12132H6.1358H6.15029H6.16478H6.17929H6.19381H6.20834H6.22289H6.23744H6.252H6.26657H6.28115H6.29574H6.31034H6.32495H6.33957H6.3542H6.36884H6.38349H6.39815H6.41281H6.42749H6.44217H6.45686H6.47156H6.48627H6.50098H6.51571H6.53044H6.54518H6.55993H6.57468H6.58944H6.60421H6.61899H6.63377H6.64856H6.66336H6.67816H6.69297H6.70779H6.72261H6.73744H6.75228H6.76712H6.78197H6.79682H6.81168H6.82654H6.84141H6.85629H6.87117H6.88605H6.90094H6.91584H6.93074H6.94564H6.96055H6.97546H6.99038H7.0053H7.02022H7.03515H7.05008H7.06502H7.07996H7.0949H7.10985H7.1248H7.13975H7.1547H7.16966H7.18462H7.19958H7.21455H7.22951H7.24448H7.25945H7.27443H7.2894H7.30438H7.31936H7.33434H7.34932H7.3643H7.37928H7.39427H7.40925H7.42424H7.43922H7.45421H7.4692H7.48419H7.49917H7.51416H7.52915H7.54413H7.55912H7.57411H7.58909H7.60408H7.61906H7.63404H7.64903H7.66401H7.67899H7.69396H7.70894H7.72392H7.73889H7.75386H7.76883H7.78379H7.79876H7.81372H7.82868H7.84364H7.85859H7.87354H7.88849H7.90344H7.91838H7.93332H7.94825H7.96318H7.97811H7.99303H8.00795H8.02287H8.03778H8.05269H8.06759H8.08249H8.09738H8.11227H8.12716H8.14203H8.15691H8.17178H8.18664H8.2015H8.21635H8.23119H8.24604H8.26087H8.2757H8.29052H8.30534H8.32014H8.33495H8.34974H8.36453H8.37931H8.39409H8.40886H8.42362H8.43837H8.45312H8.46785H8.48258H8.49731H8.51202H8.52673H8.54142H8.55611H8.57079H8.58547H8.60013H8.61478H8.62943H8.64407H8.65869H8.67331H8.68792H8.70252H8.71711H8.73169H8.74626H8.76082H8.77536H8.7899H8.80443H8.81895H8.83346H8.84795H8.86244H8.87691H8.89138H8.90583H8.92027H8.9347H8.94912H8.96352H8.97792H8.9923H9.00667H9.02103H9.03537H9.04971H9.06403H9.07834H9.09263H9.10691H9.12118H9.13544H9.14968H9.16391H9.17812H9.19233H9.20652H9.22069H9.23485H9.249H9.26313H9.27725H9.29135H9.30544H9.31951H9.33357H9.34761H9.36164H9.37566H9.38966H9.40364H9.41761H9.43156H9.44549H9.45941H9.47332H9.48721H9.50108H9.51493H9.52877H9.54259H9.5564H9.57019H9.58396H9.59771H9.61145H9.62517H9.63887H9.65256H9.66622H9.67987H9.6935H9.70712H9.72071H9.73429H9.74785H9.76139H9.77491H9.78841H9.80189H9.81536H9.8288H9.84223H9.85563H9.86902H9.88239H9.89574H9.90906H9.92237H9.93566H9.94893H9.96217H9.9754H9.98861H10.0018H10.015H10.0281H10.0412H10.0543H10.0674H10.0805H10.0935H10.1065H10.1195H10.1325H10.1454H10.1584H10.1713H10.1841H10.197H10.2098H10.2227H10.2355H10.2482H10.261H10.2737H10.2864H10.2991H10.3117H10.3243H10.337H10.3495H10.3621H10.3746H10.3871H10.3996H10.4121H10.4245H10.4369H10.4493H10.4617H10.474H10.4863H10.4986H10.5109H10.5231H10.5353H10.5475H10.5596H10.5718H10.5839H10.5959H10.608H10.62H10.632H10.644H10.6559H10.6679H10.6797H10.6916H10.7034H10.7153H10.727H10.7388H10.7505H10.7622H10.7739H10.7855H10.7971H10.8087H10.8203H10.8318H10.8433H10.8548H10.8662H10.8776H10.889H10.9003H10.9117H10.9229H10.9342H10.9454H10.9566H10.9678H10.979H10.9901H11.0012C11.2763 12.5 11.5 12.2771 11.5 12V10.5C11.5 9.9477 11.9477 9.49999 12.5 9.49999C13.0523 9.49999 13.5 9.9477 13.5 10.5V12C13.5 13.3797 12.3829 14.5 11.0012 14.5H10.9901H10.979H10.9678H10.9566H10.9454H10.9342H10.9229H10.9117H10.9003H10.889H10.8776H10.8662H10.8548H10.8433H10.8318H10.8203H10.8087H10.7971H10.7855H10.7739H10.7622H10.7505H10.7388H10.727H10.7153H10.7034H10.6916H10.6797H10.6679H10.6559H10.644H10.632H10.62H10.608H10.5959H10.5839H10.5718H10.5596H10.5475H10.5353H10.5231H10.5109H10.4986H10.4863H10.474H10.4617H10.4493H10.4369H10.4245H10.4121H10.3996H10.3871H10.3746H10.3621H10.3495H10.337H10.3243H10.3117H10.2991H10.2864H10.2737H10.261H10.2482H10.2355H10.2227H10.2098H10.197H10.1841H10.1713H10.1584H10.1454H10.1325H10.1195H10.1065H10.0935H10.0805H10.0674H10.0543H10.0412H10.0281H10.015H10.0018H9.98861H9.9754H9.96217H9.94893H9.93566H9.92237H9.90906H9.89574H9.88239H9.86902H9.85563H9.84223H9.8288H9.81536H9.80189H9.78841H9.77491H9.76139H9.74785H9.73429H9.72071H9.70712H9.6935H9.67987H9.66622H9.65256H9.63887H9.62517H9.61145H9.59771H9.58396H9.57019H9.5564H9.54259H9.52877H9.51493H9.50108H9.48721H9.47332H9.45941H9.44549H9.43156H9.41761H9.40364H9.38966H9.37566H9.36164H9.34761H9.33357H9.31951H9.30544H9.29135H9.27725H9.26313H9.249H9.23485H9.22069H9.20652H9.19233H9.17812H9.16391H9.14968H9.13544H9.12118H9.10691H9.09263H9.07834H9.06403H9.04971H9.03537H9.02103H9.00667H8.9923H8.97792H8.96352H8.94912H8.9347H8.92027H8.90583H8.89138H8.87691H8.86244H8.84795H8.83346H8.81895H8.80443H8.7899H8.77536H8.76082H8.74626H8.73169H8.71711H8.70252H8.68792H8.67331H8.65869H8.64407H8.62943H8.61478H8.60013H8.58547H8.57079H8.55611H8.54142H8.52673H8.51202H8.49731H8.48258H8.46785H8.45312H8.43837H8.42362H8.40886H8.39409H8.37931H8.36453H8.34974H8.33495H8.32014H8.30534H8.29052H8.2757H8.26087H8.24604H8.23119H8.21635H8.2015H8.18664H8.17178H8.15691H8.14203H8.12716H8.11227H8.09738H8.08249H8.06759H8.05269H8.03778H8.02287H8.00795H7.99303H7.97811H7.96318H7.94825H7.93332H7.91838H7.90344H7.88849H7.87354H7.85859H7.84364H7.82868H7.81372H7.79876H7.78379H7.76883H7.75386H7.73889H7.72392H7.70894H7.69396H7.67899H7.66401H7.64903H7.63404H7.61906H7.60408H7.58909H7.57411H7.55912H7.54413H7.52915H7.51416H7.49917H7.48419H7.4692H7.45421H7.43922H7.42424H7.40925H7.39427H7.37928H7.3643H7.34932H7.33434H7.31936H7.30438H7.2894H7.27443H7.25945H7.24448H7.22951H7.21455H7.19958H7.18462H7.16966H7.1547H7.13975H7.1248H7.10985H7.0949H7.07996H7.06502H7.05008H7.03515H7.02022H7.0053H6.99038H6.97546H6.96055H6.94564H6.93074H6.91584H6.90094H6.88605H6.87117H6.85629H6.84141H6.82654H6.81168H6.79682H6.78197H6.76712H6.75228H6.73744H6.72261H6.70779H6.69297H6.67816H6.66336H6.64856H6.63377H6.61899H6.60421H6.58944H6.57468H6.55993H6.54518H6.53044H6.51571H6.50098H6.48627H6.47156H6.45686H6.44217H6.42749H6.41281H6.39815H6.38349H6.36884H6.3542H6.33957H6.32495H6.31034H6.29574H6.28115H6.26657H6.252H6.23744H6.22289H6.20834H6.19381H6.17929H6.16478H6.15029H6.1358H6.12132H6.10685H6.0924H6.07796H6.06352H6.0491H6.0347H6.0203H6.00591H5.99154H5.97718H5.96283H5.9485H5.93417H5.91986H5.90557H5.89128H5.87701H5.86275H5.8485H5.83427H5.82005H5.80585H5.79166H5.77748H5.76332H5.74917H5.73503H5.72091H5.7068H5.69271H5.67864H5.66457H5.65053H5.63649H5.62248H5.60848H5.59449H5.58052H5.56656H5.55262H5.5387H5.52479H5.5109H5.49703H5.48317H5.46933H5.4555H5.44169H5.4279H5.41412H5.40037H5.38662H5.3729H5.35919H5.34551H5.33184H5.31818H5.30455H5.29093H5.27733H5.26375H5.25019H5.23665H5.22312H5.20961H5.19613H5.18266H5.16921H5.15578H5.14237H5.12898H5.11561H5.10225H5.08892H5.07561H5.06232H5.04905H5.03579H5.02256H5.00935H4.99616H4.98299H4.96985H4.95672H4.94361H4.93053H4.91747H4.90442H4.8914H4.87841H4.86543H4.85247H4.83954H4.82663H4.81374H4.80088H4.78804H4.77522H4.76242H4.74964H4.73689H4.72416H4.71146H4.69878H4.68612H4.67349H4.66088H4.64829H4.63573H4.62319H4.61068H4.59819H4.58572H4.57328H4.56086H4.54847H4.53611H4.52377H4.51145H4.49916H4.4869H4.47466H4.46244H4.45026H4.43809H4.42596H4.41385H4.40177H4.38971H4.37768H4.36568H4.3537H4.34175H4.32983H4.31793H4.30606H4.29422H4.28241H4.27062H4.25886H4.24713H4.23543H4.22375H4.21211H4.20049H4.1889H4.17734H4.16581H4.1543H4.14283H4.13138H4.11997H4.10858H4.09722H4.0859H4.0746H4.06333H4.05209H4.04088H4.0297H4.01855H4.00744H3.99635C2.61246 14.5 1.5 13.3775 1.5 12V10.5C1.5 9.9477 1.94772 9.49999 2.5 9.49999Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.05 3.5865V10C7.05 10.2485 7.25147 10.45 7.5 10.45C7.74853 10.45 7.95 10.2485 7.95 10V3.5865L10.1818 5.8183C10.3575 5.99404 10.6425 5.99404 10.8182 5.8183C10.9939 5.64257 10.9939 5.35764 10.8182 5.18191L7.82336 2.18707C7.74155 2.10255 7.62691 2.05002 7.5 2.05002C7.37309 2.05002 7.25845 2.10255 7.17664 2.18707L4.1818 5.18191C4.00607 5.35764 4.00607 5.64257 4.1818 5.8183C4.35754 5.99404 4.64246 5.99404 4.8182 5.8183L7.05 3.5865ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H4.00744H4.01855H4.0297H4.04088H4.05209H4.06333H4.0746H4.0859H4.09722H4.10858H4.11997H4.13138H4.14283H4.1543H4.16581H4.17734H4.1889H4.20049H4.21211H4.22375H4.23543H4.24713H4.25886H4.27062H4.28241H4.29422H4.30606H4.31793H4.32983H4.34175H4.3537H4.36568H4.37768H4.38971H4.40177H4.41385H4.42596H4.43809H4.45026H4.46244H4.47466H4.4869H4.49916H4.51145H4.52377H4.53611H4.54847H4.56086H4.57328H4.58572H4.59819H4.61068H4.62319H4.63573H4.64829H4.66088H4.67349H4.68612H4.69878H4.71146H4.72416H4.73689H4.74964H4.76242H4.77522H4.78804H4.80088H4.81374H4.82663H4.83954H4.85247H4.86543H4.87841H4.8914H4.90442H4.91747H4.93053H4.94361H4.95672H4.96985H4.98299H4.99616H5.00935H5.02256H5.03579H5.04905H5.06232H5.07561H5.08892H5.10225H5.11561H5.12898H5.14237H5.15578H5.16921H5.18266H5.19613H5.20961H5.22312H5.23665H5.25019H5.26375H5.27733H5.29093H5.30455H5.31818H5.33184H5.34551H5.35919H5.3729H5.38662H5.40037H5.41412H5.4279H5.44169H5.4555H5.46933H5.48317H5.49703H5.5109H5.52479H5.5387H5.55262H5.56656H5.58052H5.59449H5.60848H5.62248H5.63649H5.65053H5.66457H5.67864H5.69271H5.7068H5.72091H5.73503H5.74917H5.76332H5.77748H5.79166H5.80585H5.82005H5.83427H5.8485H5.86275H5.87701H5.89128H5.90557H5.91986H5.93417H5.9485H5.96283H5.97718H5.99154H6.00591H6.0203H6.0347H6.0491H6.06352H6.07796H6.0924H6.10685H6.12132H6.1358H6.15029H6.16478H6.17929H6.19381H6.20834H6.22289H6.23744H6.252H6.26657H6.28115H6.29574H6.31034H6.32495H6.33957H6.3542H6.36884H6.38349H6.39815H6.41281H6.42749H6.44217H6.45686H6.47156H6.48627H6.50098H6.51571H6.53044H6.54518H6.55993H6.57468H6.58944H6.60421H6.61899H6.63377H6.64856H6.66336H6.67816H6.69297H6.70779H6.72261H6.73744H6.75228H6.76712H6.78197H6.79682H6.81168H6.82654H6.84141H6.85629H6.87117H6.88605H6.90094H6.91584H6.93074H6.94564H6.96055H6.97546H6.99038H7.0053H7.02022H7.03515H7.05008H7.06502H7.07996H7.0949H7.10985H7.1248H7.13975H7.1547H7.16966H7.18462H7.19958H7.21455H7.22951H7.24448H7.25945H7.27443H7.2894H7.30438H7.31936H7.33434H7.34932H7.3643H7.37928H7.39427H7.40925H7.42424H7.43922H7.45421H7.4692H7.48419H7.49917H7.51416H7.52915H7.54413H7.55912H7.57411H7.58909H7.60408H7.61906H7.63404H7.64903H7.66401H7.67899H7.69396H7.70894H7.72392H7.73889H7.75386H7.76883H7.78379H7.79876H7.81372H7.82868H7.84364H7.85859H7.87354H7.88849H7.90344H7.91838H7.93332H7.94825H7.96318H7.97811H7.99303H8.00795H8.02287H8.03778H8.05269H8.06759H8.08249H8.09738H8.11227H8.12716H8.14203H8.15691H8.17178H8.18664H8.2015H8.21635H8.23119H8.24604H8.26087H8.2757H8.29052H8.30534H8.32014H8.33495H8.34974H8.36453H8.37931H8.39409H8.40886H8.42362H8.43837H8.45312H8.46785H8.48258H8.49731H8.51202H8.52673H8.54142H8.55611H8.57079H8.58547H8.60013H8.61478H8.62943H8.64407H8.65869H8.67331H8.68792H8.70252H8.71711H8.73169H8.74626H8.76082H8.77536H8.7899H8.80443H8.81895H8.83346H8.84795H8.86244H8.87691H8.89138H8.90583H8.92027H8.9347H8.94912H8.96352H8.97792H8.9923H9.00667H9.02103H9.03537H9.04971H9.06403H9.07834H9.09263H9.10691H9.12118H9.13544H9.14968H9.16391H9.17812H9.19233H9.20652H9.22069H9.23485H9.249H9.26313H9.27725H9.29135H9.30544H9.31951H9.33357H9.34761H9.36164H9.37566H9.38966H9.40364H9.41761H9.43156H9.44549H9.45941H9.47332H9.48721H9.50108H9.51493H9.52877H9.54259H9.5564H9.57019H9.58396H9.59771H9.61145H9.62517H9.63887H9.65256H9.66622H9.67987H9.6935H9.70712H9.72071H9.73429H9.74785H9.76139H9.77491H9.78841H9.80189H9.81536H9.8288H9.84223H9.85563H9.86902H9.88239H9.89574H9.90906H9.92237H9.93566H9.94893H9.96217H9.9754H9.98861H10.0018H10.015H10.0281H10.0412H10.0543H10.0674H10.0805H10.0935H10.1065H10.1195H10.1325H10.1454H10.1584H10.1713H10.1841H10.197H10.2098H10.2227H10.2355H10.2482H10.261H10.2737H10.2864H10.2991H10.3117H10.3243H10.337H10.3495H10.3621H10.3746H10.3871H10.3996H10.4121H10.4245H10.4369H10.4493H10.4617H10.474H10.4863H10.4986H10.5109H10.5231H10.5353H10.5475H10.5596H10.5718H10.5839H10.5959H10.608H10.62H10.632H10.644H10.6559H10.6679H10.6797H10.6916H10.7034H10.7153H10.727H10.7388H10.7505H10.7622H10.7739H10.7855H10.7971H10.8087H10.8203H10.8318H10.8433H10.8548H10.8662H10.8776H10.889H10.9003H10.9117H10.9229H10.9342H10.9454H10.9566H10.9678H10.979H10.9901H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H10.9901H10.979H10.9678H10.9566H10.9454H10.9342H10.9229H10.9117H10.9003H10.889H10.8776H10.8662H10.8548H10.8433H10.8318H10.8203H10.8087H10.7971H10.7855H10.7739H10.7622H10.7505H10.7388H10.727H10.7153H10.7034H10.6916H10.6797H10.6679H10.6559H10.644H10.632H10.62H10.608H10.5959H10.5839H10.5718H10.5596H10.5475H10.5353H10.5231H10.5109H10.4986H10.4863H10.474H10.4617H10.4493H10.4369H10.4245H10.4121H10.3996H10.3871H10.3746H10.3621H10.3495H10.337H10.3243H10.3117H10.2991H10.2864H10.2737H10.261H10.2482H10.2355H10.2227H10.2098H10.197H10.1841H10.1713H10.1584H10.1454H10.1325H10.1195H10.1065H10.0935H10.0805H10.0674H10.0543H10.0412H10.0281H10.015H10.0018H9.98861H9.9754H9.96217H9.94893H9.93566H9.92237H9.90906H9.89574H9.88239H9.86902H9.85563H9.84223H9.8288H9.81536H9.80189H9.78841H9.77491H9.76139H9.74785H9.73429H9.72071H9.70712H9.6935H9.67987H9.66622H9.65256H9.63887H9.62517H9.61145H9.59771H9.58396H9.57019H9.5564H9.54259H9.52877H9.51493H9.50108H9.48721H9.47332H9.45941H9.44549H9.43156H9.41761H9.40364H9.38966H9.37566H9.36164H9.34761H9.33357H9.31951H9.30544H9.29135H9.27725H9.26313H9.249H9.23485H9.22069H9.20652H9.19233H9.17812H9.16391H9.14968H9.13544H9.12118H9.10691H9.09263H9.07834H9.06403H9.04971H9.03537H9.02103H9.00667H8.9923H8.97792H8.96352H8.94912H8.9347H8.92027H8.90583H8.89138H8.87691H8.86244H8.84795H8.83346H8.81895H8.80443H8.7899H8.77536H8.76082H8.74626H8.73169H8.71711H8.70252H8.68792H8.67331H8.65869H8.64407H8.62943H8.61478H8.60013H8.58547H8.57079H8.55611H8.54142H8.52673H8.51202H8.49731H8.48258H8.46785H8.45312H8.43837H8.42362H8.40886H8.39409H8.37931H8.36453H8.34974H8.33495H8.32014H8.30534H8.29052H8.2757H8.26087H8.24604H8.23119H8.21635H8.2015H8.18664H8.17178H8.15691H8.14203H8.12716H8.11227H8.09738H8.08249H8.06759H8.05269H8.03778H8.02287H8.00795H7.99303H7.97811H7.96318H7.94825H7.93332H7.91838H7.90344H7.88849H7.87354H7.85859H7.84364H7.82868H7.81372H7.79876H7.78379H7.76883H7.75386H7.73889H7.72392H7.70894H7.69396H7.67899H7.66401H7.64903H7.63404H7.61906H7.60408H7.58909H7.57411H7.55912H7.54413H7.52915H7.51416H7.49917H7.48419H7.4692H7.45421H7.43922H7.42424H7.40925H7.39427H7.37928H7.3643H7.34932H7.33434H7.31936H7.30438H7.2894H7.27443H7.25945H7.24448H7.22951H7.21455H7.19958H7.18462H7.16966H7.1547H7.13975H7.1248H7.10985H7.0949H7.07996H7.06502H7.05008H7.03515H7.02022H7.0053H6.99038H6.97546H6.96055H6.94564H6.93074H6.91584H6.90094H6.88605H6.87117H6.85629H6.84141H6.82654H6.81168H6.79682H6.78197H6.76712H6.75228H6.73744H6.72261H6.70779H6.69297H6.67816H6.66336H6.64856H6.63377H6.61899H6.60421H6.58944H6.57468H6.55993H6.54518H6.53044H6.51571H6.50098H6.48627H6.47156H6.45686H6.44217H6.42749H6.41281H6.39815H6.38349H6.36884H6.3542H6.33957H6.32495H6.31034H6.29574H6.28115H6.26657H6.252H6.23744H6.22289H6.20834H6.19381H6.17929H6.16478H6.15029H6.1358H6.12132H6.10685H6.0924H6.07796H6.06352H6.0491H6.0347H6.0203H6.00591H5.99154H5.97718H5.96283H5.9485H5.93417H5.91986H5.90557H5.89128H5.87701H5.86275H5.8485H5.83427H5.82005H5.80585H5.79166H5.77748H5.76332H5.74917H5.73503H5.72091H5.7068H5.69271H5.67864H5.66457H5.65053H5.63649H5.62248H5.60848H5.59449H5.58052H5.56656H5.55262H5.5387H5.52479H5.5109H5.49703H5.48317H5.46933H5.4555H5.44169H5.4279H5.41412H5.40037H5.38662H5.3729H5.35919H5.34551H5.33184H5.31818H5.30455H5.29093H5.27733H5.26375H5.25019H5.23665H5.22312H5.20961H5.19613H5.18266H5.16921H5.15578H5.14237H5.12898H5.11561H5.10225H5.08892H5.07561H5.06232H5.04905H5.03579H5.02256H5.00935H4.99616H4.98299H4.96985H4.95672H4.94361H4.93053H4.91747H4.90442H4.8914H4.87841H4.86543H4.85247H4.83954H4.82663H4.81374H4.80088H4.78804H4.77522H4.76242H4.74964H4.73689H4.72416H4.71146H4.69878H4.68612H4.67349H4.66088H4.64829H4.63573H4.62319H4.61068H4.59819H4.58572H4.57328H4.56086H4.54847H4.53611H4.52377H4.51145H4.49916H4.4869H4.47466H4.46244H4.45026H4.43809H4.42596H4.41385H4.40177H4.38971H4.37768H4.36568H4.3537H4.34175H4.32983H4.31793H4.30606H4.29422H4.28241H4.27062H4.25886H4.24713H4.23543H4.22375H4.21211H4.20049H4.1889H4.17734H4.16581H4.1543H4.14283H4.13138H4.11997H4.10858H4.09722H4.0859H4.0746H4.06333H4.05209H4.04088H4.0297H4.01855H4.00744H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`UploadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default UploadIcon;
