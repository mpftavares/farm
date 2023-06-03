import { Accordion } from 'react-bootstrap';
import Appointment from '../features/Appointment';

export default function MapaContent() {
	return (
		<section className="box light-background padding mapa">
			<div className="mapa-description">
				<article className="center-content">
					<p>
						A Farmácia Patuleia é uma Unidade de Apoio ao Hipertenso e realiza a
						MAPA, assumindo um papel importante na luta contra a hipertensão.
					</p>
					<p>
						A MAPA consiste na medição da pressão arterial durante um
						determinado período de tempo em intervalos de 60 minutos, inclusivé
						durante a noite, e permite estimar a média da pressão arterial
						durante o período total do exame.
					</p>
				</article>
				<div className="appointment flex-1">
					<Appointment />
				</div>
			</div>

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
							A MAPA é um método de medição automática da pressão arterial
							através de um dispositivo. As várias medições são então
							armazenadas neste dispositivo e transferidas posteriormente para
							um software que permite a análise dos dados recolhidos. A MAPA
							deverá ter uma duração de 48 horas.
						</p>
						<p>
							No momento do funcionamento do aparelho o paciente deverá manter o
							braço em que está colocado o manguito estendido ao longo do corpo,
							até que o mesmo seja totalmente desinsuflado. Este processo ocorre
							a cada 60 minutos, sendo o processo idêntico à medição da pressão
							arterial no consultório.
						</p>
						<p>
							Durante o exame, o paciente irá preencher um relatório onde refere
							os medicamentos que tomou, as atividades realizadas; a ingestão de
							álcool, café ou consumo de tabaco, o período do sono e a
							ocorrência de sintomas.
						</p>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<h2>Cuidados a ter</h2>
					</Accordion.Header>
					<Accordion.Body>
						<p>O exame deve ser programado em dias de atividades habituais.</p>

						<p>
							É importante tomar banho antes do exame, uma vez que não o poderá
							fazer durante o exame.
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
