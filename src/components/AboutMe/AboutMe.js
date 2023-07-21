import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

const AboutMe = () => {
	return (
		<section className="about-me">
			<h2 className="about-me__header">Студент</h2>

			<div className="about-me__container">
				<div className="about-me__info">
					<h3 className="about-me__name">Виталий</h3>
					<p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
					<p className="about-me__description">
					Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
					Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
					</p>

					<ul className="about-me__links">
						<li><a className="about-me__link" href="https://github.com/Sofa-Ivahnenko/" target="_blank" rel="noreferrer">Github</a></li>
					</ul>
				</div>

				<img src={avatar} alt="Обо мне" className="about-me__image" />
			</div>
		</section>
	);
};

export default AboutMe;
