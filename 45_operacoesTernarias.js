const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000){
    console.log('Usuário vip');
}else{
    console.log('Usuário normal');
}
// Operador ternário

const NivelUsuario = (pontuacaoUsuario >= 100)? 'Usuário vip' : 'Usurário normal';
console.log(`\n${NivelUsuario}`); 