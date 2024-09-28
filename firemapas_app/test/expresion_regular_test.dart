import 'package:firemapas_app/src/utils/expresion_regular.dart';
import 'package:firemapas_app/src/utils/expresion_regular_service.dart';
import 'package:flutter_test/flutter_test.dart';

main() {
  ExpresionRegular expresionRegular;

  setUp((){
    expresionRegular = ExpresionRegularService();
  });
  group("expresion regular test email", () {

    test("espresion regular test email correcto", (){ 
      bool resp = expresionRegular.expresionRegularEmail("prueba");
      expect(resp, equals(true));

    });
   });
}