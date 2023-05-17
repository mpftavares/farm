import { Accordion } from 'react-bootstrap';

export default function MapaContent() {
	return (
		<section className="box radius light-background padding margin-bottom mapa">
			<article className="mapa-description">
				<p>
					A MAPA consiste na medição da pressão arterial durante um determinado
					período de tempo em intervalos de 60 minutos, inclusivé durante a
					noite, e permite estimar a média da pressão arterial durante o período
					total do exame.
				</p>
				<p>
					Trata-se de um método de medição automática da pressão arterial
					realizada através de um dispositivo colocado na cintura do paciente
					que insufla uma bolsa de borracha (manguito) instalada no braço. As
					várias mediões são então armazenadas neste dispositivo e transferidas
					posteriormente para um software que permite a análise dos dados
					recolhidos. A MAPA deverá ter uma duração de 48 horas.
				</p>
			</article>

			<Accordion flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<h2>Vantagens e benefícios</h2>
					</Accordion.Header>
					<Accordion.Body>
						<p>
							A grande vantagem da realização da MAPA está na possibilidade de
							se obter um conjunto de medições da tensão arterial durante a
							rotina habitual do indivíduo, durante a execução das suas
							atividades habituais e durante o sono.
						</p>
						<p>
							A MAPA permite uma avaliação mais fiável, rigorosa e informativa
							da pressão arterial do que medições isoladas, não sendo afetada
							pelo efeito “bata branca”, relacionado com a ansiedade causada
							pela medição no consultório.
						</p>
						<p>
							Deste modo, a MAPA permite diagnósticos mais precisos e planos de
							tratamento mais adequados a cada caso.
						</p>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<h2>Metodologia</h2>
					</Accordion.Header>
					<Accordion.Body>
						<p>
							O exame deve ser programado para um dia de atividades habituais.
						</p>
						<p>
							Deve-se evitar a prática de exercícios físicos durante as 24 horas
							que precedem o exame e durante o exame.
						</p>
						<p>
							É importante tomar banho antes do exame, uma vez que não o poderá
							fazer durante o exame.
						</p>
						<p>
							No momento do funcionamento do aparelho o paciente deverá manter o
							braço em que está colocado o manguito estendido ao longo do corpo,
							até que o mesmo seja totalmente desinsuflado. Este processo
							geralmente ocorre a cada 60 minutos, sendo o processo idêntico à
							medição da pressão arterial no consultório.
						</p>
						<p>
							O dispositivo deverá ser retirado da cintura durante a noite,
							sendo colocado sob a almofada ou numa mesa, permanecendo ligado ao
							manguito pela mangueira de borracha. É importante que este
							permaneça sempre acima da prega do cotovelo. Durante o período da
							noite deve-se evitar dormir sobre o braço em que está colocado o
							manguito.
						</p>
						<p>
							É importante, durante o exame, não dormir em colchões magnéticos,
							evitar a exposição a campos magnéticos, detetores de metal,
							cobertores elétricos e zonas de alta voltagem.
						</p>
						<p>
							Durante o exame, o paciente irá preenchendo um relatório onde
							refere os medicamentos que tomou (nome, dose e horário), as
							atividades realizadas; a ingestão de álcool, café ou consumo de
							tabaco, o período do sono (horário em que adormeceu e acordou,
							eventuais interrupções durante o sono e avaliação da qualidade do
							sono), ocorrência de sintomas (tonturas, sensação de desmaio,
							desmaio, dor de cabeça, etc.).
						</p>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<h2>Cuidados a ter</h2>
					</Accordion.Header>
					<Accordion.Body>
						<p>
							A MAPA é um exame seguro e praticamente isento de complicações.
						</p>
						<p>
							Pode ocorrer desconforto no braço, geralmente tolerável, e
							dificuldade em adormecer.
						</p>
						<p>
							Muito raramente, pode ocorrer inchaço no membro superior,
							problemas circulatórios e reações alérgicas ao manguito.
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</section>
	);
}
