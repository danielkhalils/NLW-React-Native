//definir categorias que a aplicação vai ter
//utils serve para funções que possam ser utilizada
//em vários lugares do app que é o caso das categoras

import RankedSvg from '../assets/ranked.svg';
import DuelSvg from '../assets/duel.svg';
import FunSvg from '../assets/fun.svg';
import TrainingSvg from '../assets/training.svg';

export const categories = [
    {id: '1', title: 'Ranqueada', icon: RankedSvg},
    {id: '2', title: 'Duelo 1x1', icon: DuelSvg},
    {id: '3', title: 'Diversão', icon: FunSvg},
    {id: '4', title: 'Treino', icon: TrainingSvg},
]