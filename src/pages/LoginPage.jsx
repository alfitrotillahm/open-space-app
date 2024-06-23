import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box, Heading, Text, VStack, Flex,
} from '@chakra-ui/react';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <Box as="section" p={4}>
      <Flex as="nav" justify="space-between" align="center" mb={4}>
        <Heading as="h1" size="lg">
          Dicoding Openspace
        </Heading>
        <Box
          className="login"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bg="gray.50"
        >
          <Box
            className="login-page"
            p={6}
            maxW="md"
            borderWidth={1}
            borderRadius="lg"
            bg="white"
            boxShadow="lg"
          >
            <VStack spacing={4} align="stretch">
              <Heading as="h1" size="lg" textAlign="center">
                Login
              </Heading>
              <LoginInput login={onLogin} />
              <Text textAlign="center">
                Don&apos;t have an account?
                {' '}
                <RouterLink to="/register">
                  <Text as="span" color="teal.500">
                    Register
                  </Text>
                </RouterLink>
              </Text>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default LoginPage;
